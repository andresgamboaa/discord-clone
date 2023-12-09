using Discord.ViewModels;

namespace Discord.ViewModels
{
    public class ProfileDto
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public string? ImageUrl { get; set; }
        public required string Email { get; set; }

        public ICollection<ServerDto> Servers { get; set; } = new HashSet<ServerDto>();
    }
}
