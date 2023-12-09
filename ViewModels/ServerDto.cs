using Discord.Models;

namespace Discord.ViewModels
{
    public class ServerDto 
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public string? ImageUrl { get; set; } = string.Empty;
        public required string InviteCode { get; set; }
        public ICollection<MemberDto> Members { get; set; } = new HashSet<MemberDto>();
        public ICollection<ChannelDto> Channels { get; set; } = new HashSet<ChannelDto>();

    }
}
