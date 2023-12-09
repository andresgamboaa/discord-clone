using System.Security.Claims;
using Discord.Models;
using Discord.Services;
using Discord.ViewModels;
using Mapster;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Discord.Controllers
{
    [Authorize]
    [Route("[controller]")]
    [ApiController]
    public class ServersController : Controller
    {
        private readonly IProfiles _profiles;
        private readonly IJwtServices _jwtServices;
        private readonly IServers _servers;

        public ServersController(IProfiles profiles, IJwtServices jwtServices, IServers servers)
        {
            _profiles = profiles;
            _jwtServices = jwtServices;
            _servers = servers;
        }

        [HttpPost]
        public IActionResult Create(CreateServer createServer)
        {
            string userEmail = User.FindFirst(ClaimTypes.Email)!.Value;
            Profile profile = _profiles.GetByEmail(userEmail)!;

            Server server = _servers.Save(new Server() 
            {
                Name = createServer.Name,
                InviteCode = Guid.NewGuid().ToString(),
                ProfileId = profile.Id,
                Profile = profile,
                Channels = new List<Channel> 
                { 
                    new() 
                    { 
                        Name = "General", 
                        ProfileId = profile.Id,
                        Profile = profile,
                        CreatedAt = DateTime.UtcNow 
                    }
                },
                Members = new List<Member> 
                { 
                    new() { ProfileId = profile.Id, Profile = profile }
                }
            });

            return CreatedAtAction("actionname", new { id = server.Id }, server.Adapt<ServerDto>());
        }

        [HttpGet]
        public IActionResult Get()
        {
            string userEmail = User.FindFirst(ClaimTypes.Email)!.Value;
            Profile profile = _profiles.GetByEmail(userEmail)!;

            var servers = _servers.GetAllByMemberWithProfileId(profile.Id)
                .Adapt< List<ServerDto> >();
            
            return Ok(servers);
        }
    }
}
