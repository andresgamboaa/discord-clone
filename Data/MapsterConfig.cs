using System.Reflection;
using Mapster;
using Discord.Models;
using Discord.ViewModels;

public static class MapsterConfig
{
    public static void RegisterMapsterConfiguration(this IServiceCollection _)
    {
        TypeAdapterConfig<Server, ServerDto>
            .NewConfig()
            .Map(dest => dest.Members, src => src.Members.Adapt<ICollection <MemberDto> >())
            .Map(dest => dest.Channels, src => src.Channels.Adapt<ICollection <ChannelDto> >());

        TypeAdapterConfig.GlobalSettings.Scan(Assembly.GetExecutingAssembly());
    }
}