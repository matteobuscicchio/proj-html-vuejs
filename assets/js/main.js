// Aggiungere Header e Footer con VueJs 
// creando una struttura dati che consenta di inserire i link nelle navbar.

let sofboxApp = new Vue({
    el: '#sofbox',
    data: {
        // sezione: UTILITY
        universalIndex: 0,
        button:{
            started: 'Get Started',
            more: 'Read More',
            feature: 'Explore More Feature',
            nessage: 'Send Message',
        },
        img:{
            logo:'assets/img/logo.png',
            jumbotron:'assets/img/jumbotron_2.png',
            onMarketing: 'assets/img/onMarketing.png',
            jumbotronTips: 'assets/img/jumbotronTips.jpeg',
            sphere: 'assets/img/sphere.png',
            logoSofbox: 'assets/img/logoesteso.png',
        },
        // sezione: NAVbar & logo
        navbar:[
            {
                style: '',
                active: true,
                section: 'Home'
            },
            {
                style: '',
                active: false,
                section: 'About us'
            },
            {
                style: '',
                active: false,
                section: 'Feature'
            },
            {
                style: '',
                active: false,
                section: 'Testimonial'
            },
            {
                style: '',
                active: false,
                section: 'Contact US'
            },
        ],

        // sezione: Platform & Button
        platform:[
            {
                title: 'The biggest platform <br> for your growth.',
                description: `There are many variations of passages of Lorem Ipsum avfailable, <br> but the majority have suffered alteration in some form`,
            },
        ],

        // blocco 1: Online Marketing
        onlineMarketing: [
            {
                title: 'Online Marketing',
                description: `It is a long establishment fact that a <br> reader will be distracted.`,
                seo: 'SEO',
                sem: 'SEM',
                strategy: 'Website Strategy',
                management: 'Social management',
            },
            {
                title: 'Online Marketing',
                description: `It is a long establishment fact that a <br> reader will be distracted.`,
                seo: 'SEO',
                sem: 'SEM',
                strategy: 'Website Strategy',
                management: 'Social management',
            },
            {
                title: 'Online Marketing',
                description: `It is a long establishment fact that a <br> reader will be distracted.`,
                seo: 'SEO',
                sem: 'SEM',
                strategy: 'Website Strategy',
                management: 'Social management',
            }
        ],

        // blocco 2: Tips&Tricks
        infoTip:[
            {
                title: 'Get tips tricks on how to <br> skyrocket your sales.',
                description: `Faff about only a quild blower i don't want no agro bleeding chimny pot <br> burke tosser cras nice one boot fanny!`,
            }
        ],
        cards:[
            {
                style: '',
                active: true,
                cardImg: 'assets/img/analysis.png',
                title: 'Reporting Analysis',
                description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti cumque ipsa delectus culpa quo repellat eos dicta, consectetur.`,
            },
            {
                style: '',
                active: false,
                cardImg: 'assets/img/seo.png',
                title: 'Technical SEO Adult',
                description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti cumque ipsa delectus culpa quo repellat eos dicta, consectetur.`,
            },
        ],

        // blocco 3: Popular Features
        infoFeatures:[
            {
                title: 'Popular features that your business needs',
                description: `Faff about only a quild blower i don't want no agro bleeding chimny pot <br> burke tosser cras nice one boot fanny!`,
            }
        ],
        featureCards:[
            {
                title: 'Reporting Analysis',
                cardImg: 'assets/img/logo.png',
            },
            {
                title: 'Reporting Analysis',
                cardImg: 'assets/img/logo.png',
            },
            {
                title: 'Reporting Analysis',
                cardImg: 'assets/img/logo.png',
            },
            {
                title: 'Reporting Analysis',
                cardImg: 'assets/img/logo.png',
            },
            {
                title: 'Reporting Analysis',
                cardImg: 'assets/img/logo.png',
            },
            {
                title: 'Reporting Analysis',
                cardImg: 'assets/img/logo.png',
            },
            {
                title: 'Reporting Analysis',
                cardImg: 'assets/img/logo.png',
            },
            {
                title: 'Reporting Analysis',
                cardImg: 'assets/img/logo.png',
            },
        ],

        // blocco 4: Testimonial
        testimonial:[
            {
                title:'Our Testimonials',
                description: `If yopu are planning on developing a product landing app or website, <br> take a look at this beautiful-crafted`,
            }
        ],
        people:[
            {
                name: 'Julia Aann',
                role: '- Coo Sofbox',
                img: 'assets/img/20.jpeg',
                quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reiciendis cupiditate dolor quibusdam est aperiam dignissimos!',
            },
            {
                name: 'Mac Znder',
                role: '- Manager Sofbox',
                img: 'assets/img/21.jpeg',
                quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reiciendis cupiditate dolor quibusdam est aperiam dignissimos',
            },
        ],

        // blocco 5: Latest Posts
        latestPostDescription:[
            {
                title:'Latest Posts',
                description: `If yopu are planning on developing a product landing`,
            }
        ],
        posts:[
            {
                title: 'Life Lack Meaning',
                img: 'assets/img/18.jpg',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reiciendis cupiditate dolor quibusdam est aperiam dignissimos!',
            },
            {
                title: 'Life Lack Meaning',
                img: 'assets/img/17.jpg',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reiciendis cupiditate dolor quibusdam est aperiam dignissimos',
            },
            {
                title: 'Life Lack Meaning',
                img: 'assets/img/19.jpg',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reiciendis cupiditate dolor quibusdam est aperiam dignissimos',
            }
        ],
    },

    methods: {
        // sezione: UTILITY
        indexFinder: function(index){
            this.universalIndex = index;
            console.log(this.universalIndex);
        },
        // sezione: NAVbar & logo
        addClass: function(i){
            let activeSearch = this.navbar[i].active;
            if (!(activeSearch)) {
                return 
            } else {
                return 'active'
            }
        },

        // blocco 2: Tips&Tricks
        addClassTips(i){
            let activeSearch = this.cards[i].active;
            if (!(activeSearch)) {
                return 
            } else {
                return 'active_tip'
            }
        },
    },
    mounted(){}
})