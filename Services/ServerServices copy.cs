using Discord.Data;
using Discord.Models;
using Microsoft.EntityFrameworkCore;

namespace Discord.Services
{
    public class ChannelsServices : IChannels
    {
        private AppDbContext _dbContext;
        public ChannelsServices(AppDbContext dbContextData)
        {
            _dbContext = dbContextData;
        }

        
    }
}
