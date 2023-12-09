namespace Discord.Models
{
    public enum MemberRole
    {
        Admin,
        Moderator,
        Guest
    }

    public class Member
    {
        public int Id { get; set; }
        public MemberRole Role { get; set; }
        public int ProfileId { get; set; }
        public Profile Profile { get; set; }
        public int ServerId { get; set; }
        public Server Server { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public Member()
        {
            this.CreatedAt = DateTime.UtcNow;
        }
    }
}
