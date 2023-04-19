import Accounts from '~/media/Images/user.png';
import AccountsWhite from '~/media/Images/user1.png';
import Post from '~/media/Images/post.png';
import PostWhite from '~/media/Images/post1.png';
import Gallery from '~/media/Images/gallery.png';
import GalleryWhite from '~/media/Images/gallery1.png';
import Email from '~/media/Images/email.png';
import EmailWhite from '~/media/Images/email1.png';
import Sms from '~/media/Images/sms1.png';
import SmsWhite from '~/media/Images/sms.png';
import Insight from '~/media/Images/insight.png';
import InsightWhite from '~/media/Images/insight1.png';


const SideBarData = [
    {
        pathTo: '/generation/connect_accounts',
        btnVal: "Connect Accounts",
        Iconblack: Accounts,
        IconWhite: AccountsWhite
    },
    {
        pathTo: '/generation/poster',
        btnVal: "Create Post",
        Iconblack: Post,
        IconWhite: PostWhite
    },
    {
        pathTo: '/generation/email',
        btnVal: "Email",
        Iconblack: Email,
        IconWhite: EmailWhite
    },
    {
        pathTo: '/generation/sms',
        btnVal: "SMS",
        Iconblack: Sms,
        IconWhite: SmsWhite
    },
    {
        pathTo: '/generation/gallery',
        btnVal: "Gallery",
        Iconblack: Gallery,
        IconWhite: GalleryWhite
    },
    {
        pathTo: '/generation/insights',
        btnVal: "Insights",
        Iconblack: Insight,
        IconWhite: InsightWhite
    },
]

export default SideBarData;