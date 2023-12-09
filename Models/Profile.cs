using Discord.ViewModels;

namespace Discord.Models
{
    public class Profile
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public string? ImageUrl { get; set; }
        public required string Email { get; set; }
        public required string Password { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public ICollection<Server> Servers { get; set; } = new HashSet<Server>();
        public ICollection<Member> Members { get; set; } = new HashSet<Member>();
        public ICollection<Channel> Channels { get; set; } = new HashSet<Channel>();
        public Profile() {
            this.CreatedAt = DateTime.UtcNow;
        }

        public static Profile FromSignUpModel(SignUpModel signIn)
        {
            return new Profile
            {
                Name = signIn.Name,
                Email = signIn.Email,
                Password = signIn.Password,
            };
        }
    }
}
