using Discord.Models;

namespace Discord.Services
{
    public interface IProfiles
    {
        IEnumerable<Profile> GetAll();

        Boolean Exist(string email);
        Profile? GetByEmail(string email);
        Profile Save(Profile profile);

        Profile SaveAsync(Profile profile);
    }
}
