using Discord.ViewModels;

namespace Discord.Models
{
    public class ProfileSimpleDto
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public string? ImageUrl { get; set; }
        public required string Email { get; set; }
    }
}
