
namespace Discord.Models
{
    public class Server
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public string? ImageUrl { get; set; } = string.Empty;
        public required string InviteCode { get; set; }
        public int ProfileId { get; set; }
        public required Profile Profile { get; set; }
        public ICollection<Member> Members { get; set; } = new HashSet<Member>();
        public ICollection<Channel> Channels { get; set; } = new HashSet<Channel>();
        
    }
}
