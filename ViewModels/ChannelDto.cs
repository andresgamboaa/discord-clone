using Discord.Models;

namespace Discord.ViewModels
{
  public class ChannelDto
  {
    public int Id { get; set; }
    public required string Name { get; set; }
    public ChannelType Type { get; set; }
  }
}
