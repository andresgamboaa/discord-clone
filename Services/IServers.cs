using Discord.Models;

namespace Discord.Services
{
    public interface IServers
    {
        IEnumerable<Server> GetAll();
        IQueryable<Server> GetAllByMemberWithProfileId(int profileId);

        Server Save(Server server);
    }
}
