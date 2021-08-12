using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp.Models;

namespace WebApp.Services
{
   public interface IPositionsService
    {
        Task<IEnumerable<Position>> GetPositionsList();
    }
}
