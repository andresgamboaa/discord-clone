using Discord.Data;
using Discord.Models;
using Microsoft.EntityFrameworkCore;

namespace Discord.Services
{
    public class ProfilesServices : IProfiles
    {
        private AppDbContext _dbContext;
        public ProfilesServices(AppDbContext dbContextData)
        {
            _dbContext = dbContextData;
        }

        public bool Exist(string email)
        {
            return _dbContext.Profiles.FirstOrDefault(p => p.Email == email) != null;
        }

        public IEnumerable<Profile> GetAll()
        {
            return _dbContext.Profiles;
        }

        public Profile? GetByEmail(string email)
        {
            return _dbContext.Profiles.FirstOrDefault(p => p.Email == email);
        }

        public Profile Save(Profile profile)
        {
            _dbContext.Add(profile);
            _dbContext.SaveChanges();
            return profile;
        }

        public async Task<Profile> SaveAsync(Profile profile)
        {
            _dbContext.Add(profile);
            await _dbContext.SaveChangesAsync();
            return profile;
        }

        Profile IProfiles.SaveAsync(Profile profile)
        {
            throw new NotImplementedException();
        }
    }

}
