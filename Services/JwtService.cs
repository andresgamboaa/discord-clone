using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Discord.Data;
using Discord.Models;
using Discord.ViewModels;
using Microsoft.IdentityModel.Tokens;

namespace Discord.Services
{
    public class JwtService : IJwtServices
    {
        private readonly IConfiguration _configuration;
        private readonly AppDbContext _dbcontext;

        public JwtService(IConfiguration configuration, AppDbContext dbContext)
        {
            _configuration = configuration;
            _dbcontext = dbContext;
        }

        public Jwt? Authenticate(AccessCredentials credentials)
        {
            if (!_dbcontext.Profiles.Any(e => e.Email == credentials.Email && e.Password == credentials.Password))
            {
                return null;
            }

            var tokenhandler = new JwtSecurityTokenHandler();
            var tkey = Encoding.UTF8.GetBytes(_configuration["JwtOptions:SigningKey"]!);

            var TokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new System.Security.Claims.ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Email, credentials.Email)
                }),
                Expires = DateTime.UtcNow.AddMinutes(5),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tkey), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenhandler.CreateToken(TokenDescriptor);

            return new Jwt { Token = tokenhandler.WriteToken(token) };

        }
    }
}
