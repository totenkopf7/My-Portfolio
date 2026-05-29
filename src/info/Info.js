import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";
import mock6 from "../img/mock6.png";
import mock7 from "../img/mock7.png"; 
import mock8 from "../img/mock8.png"; 
import mock9 from "../img/mock9.png";
import mock10 from "../img/mock10.png";
import mock11 from "../img/mock11.png";
import mock12 from "../img/mock12.png";


export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export let singlePage = false;

export const info = {
    firstName: "Zinar",
    lastName: "Qasim",
    initials: "ZMQ",
    position: "a Software Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '👨🏻‍💻', 
            text: 'Flutter, Python, Web Templates, Cybersecurity' 
        },
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the Northern Iraq - KRG'
        },
        {
            emoji: "💼",
            text: "freelancer"
        },
        {
            emoji: "📧",
            text: "zinarmohammed@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/share/1a8ziMxoYQ/?mibextid=wwXIfr",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/zinar_mizuri/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/totenkopf7",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/zinar-mohammed-a52a52147?originalSubdomain=iq",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://x.com/ZinarMohammed",
            icon: "fa fa-twitter",
            label: 'X'
        }
    ],
    bio: "Hi, I'm Zinar, a passionate software developer specializing in Flutter app development, Python programming, and cybersecurity. I also have experience customizing web templates to create functional and responsive websites, like this portfolio. With a diverse skill set and a love for problem-solving, I'm always eager to take on new challenges in the tech world.",
    skills: {
        proficientWith: [
            'Flutter',
            'Dart',
            'Python',
            'HTML',
            'CSS',
            'JavaScript',
            'Git',
            'GitHub',
            'Firebase',
            'REST APIs',
            'Figma',
            'Linux',
            'OOP',
            'Multilingual'
        ],
        exposedTo: [
            'Cybersecurity Tools',
            'SQL',
            'Bash Scripting',
            'Penetration Testing',
            'Data Analysis',
            'UI/UX Design',
            'Cloud Platforms'
        ]
    },
    hobbies: [
        {
            label: 'boxing',
            emoji: '🥊'
        },
        {
            label: 'chess',
            emoji: '♟️'
        },
        {
            label: 'German Language',
            emoji: '🇩🇪'
        }
    ],
    portfolio: [
        {
            title: "Guizz",
            live: "https://guizzzz.web.app/",
            image: mock1,
            showLive: true,
            icons: ["fa fa-info-circle"], 
            description: "A cross-platform quiz app built with Flutter and Firebase. Participants answer 10 random questions, and qualify for a winners' list. Features include real-time stats, an admin dashboard for winner selection, and engaging animations using Lottie. Demonstrates expertise in Flutter, Firebase, state management (Provider), and responsive UI design."
        },
                {
            title: "Narx Dark Corner",
            live: "https://narx-dark-corner.web.app/",
            image: mock2,
            showLive: true,
            icons: ["fa fa-info-circle"],
            description: "A real-time chat application built with Flutter and Firebase. Users can register, log in, and send/receive messages instantly. Features include Firebase Authentication for secure user login, Firestore for real-time message storage, and a responsive UI. Demonstrates expertise in Flutter, Firebase, real-time data handling, and user authentication."
        },

                        {
            title: "Zinar - AI Assistant",
            live: "http://zinar-ai.web.app/",
            image: mock10,
            showLive: true,
            icons: ["fa fa-info-circle"],
            description: "Zinar AI is an intelligent 3D avatar assistant specialized in oil & gas operations, refinery processes, and industrial maintenance. Powered by advanced AI, Zinar provides expert-level technical answers about petroleum engineering, drilling, refining, and safety protocols - all through an interactive 3D face interface."
        },




                {
            title: "LiveWork View",
            live: "https://www.dropbox.com/scl/fi/on0ffh6xpk6urf5t1pm9t/livework.mp4?rlkey=zfg0et2hmi1zdvagwoa42pqv3&st=39y1zgjq&dl=0",
            image: mock7,
            showLive: true,
            icons: ["fa fa-info-circle"], 
            description: "A modern Flutter-based application designed for live work reporting and task management. It allows teams to document progress, submit detailed reports, and track completed tasks in real time. With secure data storage and role-based access, managers can monitor operations while employees focus on productivity. Built for efficiency and transparency, the app streamlines workplace communication and data-driven decision making."
        },

                   {
            title: "Vextract Tool",
            live: "https://www.dropbox.com/scl/fi/g7xkgxa71jmk2lnwqa31l/Vextract.mp4?rlkey=wzq5xzftgo7nk7uep21thrq5m&st=iv1iz5na&dl=0",
            image: mock12,
            showLive: true,
            icons: ["fa fa-info-circle"], 
            description: "Transform any video into searchable text in seconds. Simply paste a link from YouTube, TikTok, Instagram, Snapchat, X, Facebook, and other supported platforms. The platform automatically downloads the video in high quality, extracts spoken content with advanced speech recognition, and captures on-screen text for a complete transcript. Designed to handle a wide range of accents, dialects, and speaking styles, it helps creators, researchers, journalists, students, and professionals turn video content into accessible, editable text. Free access coming soon."
        },

           {
            title: "Cyber Quiz",
            live: "https://cyberquiz.web.app/",
            image: mock11,
            showLive: true,
            icons: ["fa fa-info-circle"], 
            description: "A cybersecurity quiz app built with Flutter and Firebase that uses Yes/No questions to test users’ knowledge of cybersecurity concepts, best practices, and common threats. After each answer, a check mark appears for correct responses or an X for incorrect ones, while the score updates in real time at the bottom of the screen. The app focuses on simplicity, interactivity, and learning through quick decision-based questions, demonstrating skills in Flutter development, Firebase integration, and cybersecurity education."
        },
                        {
            title: "News App",
            live: "https://news24app.netlify.app/",
            image: mock9,
            showLive: true,
            icons: ["fa fa-info-circle"], 
            description: "Stay informed with a smart and simple AI-powered news experience. Choose your preferred category, language, and topic, then tap “Get News” to instantly receive the latest relevant articles from around the world. Whether you're interested in technology, sports, business, politics, entertainment, or global events, the app delivers personalized news tailored to your interests in seconds. Fast, clean, and easy to use."
        },


{
    title: "Any Scan",
    live: "https://www.dropbox.com/scl/fi/k3db01r7n23qa08bkuk9a/anyscan.mp4?rlkey=3xyxe2fegta4qmikhk18wmyek&e=1&st=xxgzbyz8&dl=0",
    image: mock8,
    showLive: true,
    icons: ["fa fa-info-circle"],
    description: "An intelligent web-based image analysis application that allows users to upload any image and receive category-specific insights instantly. Whether the image contains medicine, food, objects, environments, or people, the system analyzes it accordingly and provides structured, relevant information. Designed for accuracy and clarity, Any Scan transforms raw images into meaningful interpretations, helping users better understand what they are seeing through fast, AI-powered analysis."
},
        {
            title: "Password Manager",
            live: "https://www.dropbox.com/scl/fi/accrsyyu97yzegkbkmm4q/pass-manager.mp4?rlkey=3gmc4y64hm54vct52i4vto2xr&st=yfc0zg78&dl=0",
            source: "https://github.com/totenkopf7/Password-Manager",
            image: mock3,
            showSource: true,
            showLive: true,
            icons: ["fa fa-info-circle"],
            description: "A secure password manager built with Python. Users can log in with credentials, save website/email passwords, generate strong passwords, and search for saved passwords. Demonstrates expertise in Python, data encryption, and secure password management. Highlights problem-solving skills and user-friendly design."
},
        {
            title: "Youtube Downloader",
            live: "https://www.dropbox.com/scl/fi/dtyugtbah1xy924dxjhxk/youtube-downloader.mp4?rlkey=sxhtgcennozuk94lthljofixb&st=gc7or5uq&dl=0",
            image: mock4,
            showLive: true,
            icons: ["fa fa-info-circle"],
            description: "A Python-based YouTube Downloader that supports downloading videos and playlists in both MP3 and MP4 formats. Users simply provide the YouTube link, and the program handles the rest. Demonstrates expertise in Python, API integration, and file handling. Highlights problem-solving skills for media downloading and automation."
},
        {
            title: "Notifier Desktop App",
            live: "https://www.dropbox.com/scl/fi/a9z2v23iwg2tbr5d1vo4t/NotifierApp.mp4?rlkey=ccnhcwh0yw3gac8p8jhq7qhb5&st=h1ijlmix&dl=0",
            source: "https://github.com/totenkopf7/Screen-Notifier",
            image: mock5,
            showSource: true,
            showLive: true,
            icons: ["fa fa-info-circle"],
            description: "A Python-based GUI application designed to promote healthy screen habits. It forces users to take breaks by temporarily freezing the mouse, keyboard, and monitor. Tailored for single-monitor setups, it ensures users step away from their screens. Demonstrates expertise in Python, GUI development (e.g., Tkinter), and system-level programming. Highlights problem-solving for health-focused productivity tools."
},
        {
            title: "10+ Kali Tools in my Github Repo",
            source: "https://github.com/totenkopf7/",
            image: mock6,
            showSource: true,
            showLive: false,
            icons: ["fa fa-info-circle"],
            description: "A collection of cybersecurity tools and scripts for penetration testing, developed in Python, you can find them in my Github Repo."
        }
    ]
};