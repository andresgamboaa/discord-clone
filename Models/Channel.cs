namespace Discord.Models
{
  public enum ChannelType
  {
    Text,
    Audio,
    Video
  }

  public class Channel
  {
    public int Id { get; set; }
    public required string Name { get; set; }
    public ChannelType Type { get; set; }
    public int ProfileId { get; set; }
    public Profile Profile { get; set; }
    public int ServerId { get; set; }
    public Server Server { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }

  }
}
