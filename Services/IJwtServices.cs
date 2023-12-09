using Discord.Models;
using Discord.ViewModels;

namespace Discord.Services
{
    public interface IJwtServices
    {
        Jwt? Authenticate(AccessCredentials credentials);
    }
}
