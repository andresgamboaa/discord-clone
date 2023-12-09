using Discord.Data;
using Discord.Models;
using Microsoft.EntityFrameworkCore;

namespace Discord.Services
{
    public class ServerServices : IServers
    {
        private AppDbContext _dbContext;
        public ServerServices(AppDbContext dbContextData)
        {
            _dbContext = dbContextData;
        }

        public IEnumerable<Server> GetAll()
        {
            return _dbContext.Servers;
        }

        public IQueryable<Server> GetAllByMemberWithProfileId(int profileId)
        {
            var servers = (
                    from s in _dbContext.Servers
                    where s.Members.Any(m => m.ProfileId == profileId)
                    select s
                )
                .Include(s => s.Members)
                .Include(s => s.Channels);

            return servers;
        }
        
        public Server? GetById(int serverId)
        {
            return _dbContext.Servers.Find(serverId);
        }

        public Server Save(Server server)
        {
            _dbContext.Add(server);
            _dbContext.SaveChanges();
            return server;
        }
    }
}
