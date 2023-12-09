using Discord.Models;
using Discord.Services;
using Discord.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Discord.Controllers
{
    [Authorize]
    [Route("[controller]")]
    [ApiController]
    public class ProfilesController : Controller
    {
        private readonly IProfiles _profiles;
        private readonly IJwtServices _jwtServices;

        public ProfilesController(IProfiles profiles, IJwtServices jwtServices)
        {
            _profiles = profiles;
            _jwtServices = jwtServices;
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("signup")]
        public IActionResult SignUp(SignUpModel signUpModel)
        {
            if (_profiles.Exist(signUpModel.Email))
            {
                return Conflict(new { Message = "Profile with this email already exists" });
            }

            var profile = Profile.FromSignUpModel(signUpModel);
            _profiles.Save(profile);
            return Ok(profile);
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("signin")]
        public IActionResult SignIn(AccessCredentials credentials)
        {
            var token = _jwtServices.Authenticate(credentials);

            if (token == null) return Unauthorized();

            return Ok(token);
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult Get()
        {
            return Ok(_profiles.GetAll());
        }

    }
}
