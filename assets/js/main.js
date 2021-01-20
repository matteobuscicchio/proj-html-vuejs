// Aggiungere Header e Footer con VueJs 
// creando una struttura dati che consenta di inserire i link nelle navbar.

let sofboxApp = new Vue({
    el: '#sofbox',
    data: {
        linkIndex: 0,
        // sezione: NAVbar & logo
        logo:'assets/img/logo.png',
        navbar:[
            {
                style: 'active',
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

        // sezione: Online Marketing
        onlineMarketing: [
            {
                name: 'Online Marketing',
                description: `It is a long establishment fact that a <br>reader will be distracted.`,
                seo: 'SEO',
                sem: 'SEM',
                strategy: 'Website Strategy',
                management: 'Social management',
            },
            {
                name: 'Online Marketing',
                description: `It is a long establishment fact that a <br>reader will be distracted.`,
                seo: 'SEO',
                sem: 'SEM',
                strategy: 'Website Strategy',
                management: 'Social management',
            },
            {
                name: 'Online Marketing',
                description: `It is a long establishment fact that a <br>reader will be distracted.`,
                seo: 'SEO',
                sem: 'SEM',
                strategy: 'Website Strategy',
                management: 'Social management',
            }
        ],
    },

    methods: {
        activeLink: function(index){
            this.linkIndex = index;
            console.log(this.linkIndex);
        },
        addClass: function(i){
            let activeSearch = this.navbar[i].active;
            let activeStyle = this.navbar[i].style;
            if (!(activeSearch)) {
                return
            } else {
                return activeStyle = 'active'
            }
        },
    },
    mounted(){}
})