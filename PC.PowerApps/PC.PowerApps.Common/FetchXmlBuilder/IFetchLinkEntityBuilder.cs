using PC.PowerApps.Common.Entities.Fetch;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PC.PowerApps.Common.FetchXmlBuilder
{
    public interface IFetchLinkEntityBuilder
    {
        FetchLinkEntityType GetFetchLinkEntityType();
    }
}
