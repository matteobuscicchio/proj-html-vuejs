// Aggiungere Header e Footer con VueJs 
// creando una struttura dati che consenta di inserire i link nelle navbar.

let sofboxApp = new Vue({
    el: '#sofbox',
    data: {
        // sezione: UTILITY
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
            logoSofbox: 'assets/img/logoesteso.png',
        },
        // sezione: NAVbar & logo
        linkIndex: 0,
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
        tipsIndex: 0,
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
        ]
    },

    methods: {
        // sezione: NAVbar & logo
        activeLink: function(index){
            this.linkIndex = index;
            console.log(this.linkIndex);
        },
        addClass: function(i){
            let activeSearch = this.navbar[i].active;
            if (!(activeSearch)) {
                return 
            } else {
                return 'active'
            }
        },

        // blocco 2: Tips&Tricks
        activeTip: function(index){
            this.tipsIndex = index;
            console.log(this.tipsIndex);
        },
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