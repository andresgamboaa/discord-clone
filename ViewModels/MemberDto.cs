using Discord.Models;

namespace Discord.ViewModels
{

    public class MemberDto
    {
        public int Id { get; set; }
        public MemberRole Role { get; set; }
        public required ProfileSimpleDto Profile {get; set;}
    }
}
