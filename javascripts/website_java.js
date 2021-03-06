//resuem object
var resume_obj = {
    'Info':{
        'name':'Jason Edward Lopez',
        'email':'jasonlopez01@gmail.com',
        'LinkedIn': "<a href='https://www.linkedin.com/pub/jason-lopez/54/667/421'>LinkedIn</a>",
        'Tableau': "<a href='https://public.tableau.com/profile/jasonlopez01'>Tableau Public</a>"
    },

    'Positions':[
        {
            'title':'Business Analyst- Operations, Supply Chain Management, and Services',
            'company':'Curvature LLC',
            'dates':'March 2014 to Present',
            'tasks':[
                'Collaborated with multiple stakeholders to gather system requirements for complex enhancements to various processes and tools',
                'Monitored application development to ensure quality and on-time deliverables',
                'Created design specifications, developed test plans and training documents',
                'Performed ad hoc reporting and analysis - using Oracle, Microsoft Excel, SQL, Tableau, and SSRS',
                'Created ETL process using MS SQL Server SSIS and Python',
                'Member of go-live team for company acquisition integration. Was part of onsite team sent to ensure a smooth integration by assisting in training, system fixes, process analysis, and solutions planning'
            ]
        },

        {
            'title':'Wave Planning and Order Management Lead',
            'company':'Curvature LLC (formerly known as Network Hardware Resale)',
            'dates':'September 2011 to March 2014',
            'tasks':[
                'Redeveloped operations order management process and internal warehouse logistics',
                'Worked with various stakeholders to create and implement new policies and standard operating procedures',
                'Performed root cause analysis as issues came up, implemented process improvements as needed',
                'Coordinated with multiple departments to ensure accurate and timely order fulfillment',
                'Created custom reports and tools, developed metrics and goals for support staff',
                'Created detailed training manuals and oversaw training of new order processing staff',
                'Acted as project lead in the EMEA Operations redevelopment'
            ]
        },

        {
            'title':'Sales Administrator',
            'company':'Network Hardware Resale LLC',
            'dates':'July 2010 to September 2011',
            'tasks':[
                'Entered sales and purchases for wholesale division',
                'Aided with inventory management by compiling reports and implementing control policies',
                'Coordinated with accounting and operations to ensure proper receipt, payment, collection, and shipment of items',
                'Handled customer feedback and return procedures'
            ]
        }
        // {
        //     'title':'Administrative Assistant',
        //     'company':'Network Hardware Resale LLC',
        //     'dates':'January 2009 to July 2010',
        //     'tasks':[
        //         'Managed filing staff, coordinated efforts and assigned tasks',
        //         'Supported accounting department by processing invoices and payments',
        //         'Data entry into Excel, editing documents in various formats'
        //     ]
        // },

        // {
        //     'title':'Campus Sustainability Intern',
        //     'company':'University of California, Santa Barbara',
        //     'dates':'September 2008 to December 2008',
        //     'tasks':[
        //         'Audited buildings and took inventory of major appliances/ energy use',
        //         'Recorded and analyzed data, presented findings to project leaders',
        //         'Recogmmended chagnes to reduce energy use to building managers'
        //     ]
        // },
    ],

    'Skills':[
        {'skill': 'Tableau', 'icon': '/icons/tableau-reader.png', 'level':'85%'},
        {'skill': 'Microsoft SQL Server', 'icon': '/icons/database-icon.png','level':'85%'},
        {'skill': 'Excel', 'icon': '/icons/blue-document-excel-icon.png','level':'95%'},
        {'skill': 'Excel - VBA', 'icon': '/icons/design_mode.png','level':'95%'},
        {'skill': 'Oracle Applications', 'icon': '/icons/oracle_logo.png','level':'70%'},
        {'skill': 'HTML/CSS', 'icon': '/icons/html_icon.png','level':'50%'},
        {'skill': 'Javascript/jQuery', 'icon': '/icons/js-icon.png','level':'45%'},
        {'skill': 'Python', 'icon': '/icons/python-icon.png','level':'50%'},
        {'skill': 'Power Point', 'icon': '/icons/page-white-powerpoint-icon.png','level':'80%'},
        {'skill': 'Word', 'icon': '/icons/page-white-word-icon.png','level':'85%'},

    ],

    'Education':{
        'schools':[{
                'name': 'University of California, Santa Barbara',
                'major': 'Environmental Studies',
                'degree': 'Bachelor of Arts',
                'dates':2005,
                'icon': '/icons/usb_logo.png'
            }],
        'online':[{
                'site': 'CodeAcademy',
                'info': 'Various programming tutorials and walkthroughs',
                'link': '<a href = "https://www.codecademy.com/jasonlopez01" >Link to my profile</a>',
                'icon': '/icons/codeacademy.png'
            }]
        }
};

// smooth scrolling
var smooth_scrolling = function () {
    $('a[href^="#"]').on('click', function (e) {
         e.preventDefault();

         var target = this.hash,
             $target = $(target);

         $('html, body').stop().animate({
             'scrollTop': $target.offset().top - 45 //buffer for fixed nav bar
         }, 1000, 'swing', function () {
             window.location.hash = target;
         });
     });
};


//projects object
var projects_obj = [
    {'name':'This Site...',
        'id':'website',
        'caption':'First web project, Javascript, jQuery, Bootstrap',
        'text':"<p class = 'text-left'>So meta... This site was a side project to practice some of the Javascript, jQuery, HTML, and CSS I've been learning for a while. \
                More for fun than anything else. Although I'm not exactly an aspiring web developer, an increasing amount of tools and applications \
                 are web based, with entire operating systems moving to the cloud. I used the Twitter Bootstrap framework \
                 and added a basic theme from <a href='https://bootswatch.com'>Bootswatch</a>, but otherwise wrote the Javascript/jQuery and added custom CSS for better styling and effects.\
                 I also added a subtle animation in the background of the main page's banner image and Resueme page's background with \
                 <a href = 'http://p5js.org'>p5.js</a>, the Javascript library for Processing. <a href='https://processing.org'>Processing</a> is a super cool language \
                 built for visual design that allows you to quickly draw and animate with simple logic and math. </p> \
                 <p class = 'text-left'>It would have been a lot easier and faster to just use a complete template and fill in my content, or use one of the many drag \
                 and drop tools, but I wanted to get into the details and figure out how to use everything together. There are a lot of great template \
                 sites out there, like <a href='http://startbootstrap.com'>StartBootstrap</a> and <a href = 'https://wrapbootstrap.com'>Wrapbootstrap</a>, which are both based on the Bootstrap framework \
                 and have some polished looking free and paid templates - definitely a source of insipiration.\
                 Having said that, it's not too difficult and quite interesting to build it yourself at least once, it was a great \
                 way to lean more about Javascript, jQuery, HTML, CSS, the Bootstrap framework, and Processing (ps5).</p>",
        'title_img':'/icons/webpage-icon.png'
    },
    {'name':'Voice Recognition Site',
        'id' : 'voice_recog',
        'caption':'Webkit Speech Recognition and Ajax API Calls',
        'text':"<p class = 'text-left'>This site is the result of some practice with <a href = 'http://api.jquery.com/jquery.ajax/'>Ajax</a>, \
        along with some messing around with the <a href = 'https://developer.spotify.com/web-api/'>Spotify Web API</a>. It utilizes HTML5's built in\
        Speech Recognition functions, which were also pretty fun to play with. It eventually tunred into this site that takes a few basic spoken or written commands \
        and either plays a song, speaks the date, or does a simple Wikipedia search. It also eneded up being good practice using Regular Expressions, which I used \
        to interpret the commands.</p>",
        'title_img':'/icons/speaker-icon.png'
    }
];

var contact_submit = function(){
    var data_string = $('#contact_form').serialize();
    var reg = /\w+[.|\w]*@\w+[.]\w/;
    var address = reg.exec()
    $('#form_message').removeClass();
    if(!$('#inputName').val() || !$('#_replyto').val() || !$('#textArea')){
        $('#form_message').addClass('text-warning')
        $('#form_message').text('Hey, looks like you left some stuff blank...')
        return false
    }else if(reg.exec($('#_replyto').val()) == null){
        $('#form_message').addClass('text-warning')
        $('#form_message').text('Hmm, looks like like an invalid email...')
        return false;
    };
    $.ajax({
        method:'POST',
        url:'//formspree.io/jasonlopez01@gmail.com',
        data: data_string,
        dataType: 'json',
        success:function(data){
            $('#form_message').addClass('text-info')
            $('#form_message').text('Thanks for the message ' + $('#inputName').val());
        },
        error: function(data){
            $('#form_message').addClass('text-warning')
            $('#form_message').text('Sorry, something went wrong... my bad');
        }
    });
    $('#contact_submit').blur();
    return false;
};

$(document).ready(function () {
    smooth_scrolling();
    
    $('#contact_submit').on('click', contact_submit);

    $("a, button").on('hidden.bs.modal',function(){
        $("a, button").blur()
    })

    //add in info
    for(item in resume_obj.Info){
        $('#Info').append('<h5 class = "info_item">' + resume_obj.Info[item] + '</h5>')
    }
    //add in skills content
    for (skill in resume_obj.Skills){
        var skill_item =
            '<div class = "row" data-toggle="tooltip" data-placement="top" title="" data-original-title="%LEVEL%"><div class = "col-md-8"> \
                <span class = "icon_span"><img src = "%ICON_URL%"></span>%SKILL%</div>\
            <div class = "progress col-md-4"> \
                <div class = "progress-bar" style= "width: %LEVEL%;" percentage: "%LEVEL%"></div> \
            </div></div>'
        skill_item = skill_item.replace(/%ICON_URL%/g,resume_obj.Skills[skill].icon)
        skill_item = skill_item.replace(/%SKILL%/g,resume_obj.Skills[skill].skill)
        skill_item = skill_item.replace(/%LEVEL%/g, resume_obj.Skills[skill].level)
        $('#Skills').append(skill_item)
    };
    //add in education
    for(school in resume_obj.Education.schools){
        $('#Education').append('<h4>' + resume_obj.Education.schools[school].name + '</h4>')
        $('#Education').append('<h5>' + resume_obj.Education.schools[school].degree + ' in ' + resume_obj.Education.schools[school].major + ', ' + resume_obj.Education.schools[school].dates + ' </h5>')
        $('#Education').append('<img src =' + resume_obj.Education.schools[school].icon + '>')
    };
    for(site in resume_obj.Education.online){
        $('#Education').append('<h4>' + resume_obj.Education.online[site].site + '</h4>')
        $('#Education').append('<h5>' + resume_obj.Education.online[site].info + '</h5>')
        $('#Education').append('<h5>' + resume_obj.Education.online[site].link + '</h5>')
        $('#Education').append('<img src =' + resume_obj.Education.online[site].icon + '>')
    };
    // add in work experience
    for(job in resume_obj.Positions){
        $('#Positions').append('<h4>' + resume_obj.Positions[job].title + '</h4>')
        $('#Positions').append('<h4>' + resume_obj.Positions[job].company + '</h4>')
        $('#Positions').append('<h5>' + resume_obj.Positions[job].dates + '</h5>')
        $('#Positions').append('<ul></ul>')
        for (task in resume_obj.Positions[job].tasks){
            $('#Positions').children('ul:last').append('<li>' + resume_obj.Positions[job].tasks[task] + '</li>')
        }
        $('#Positions').append('<hr>')
    };

 });

// animiated skill level bars
function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top);
    var elemBottom = elemTop + $elem.parent().height();
    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation() {
    var $elem = $('.progress-bar');

    // If the animation has already been started
    if ($elem.hasClass('start')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start');
    }
};

$('[data-toggle="tooltip"]').tooltip(); //data toggle init _____________________ NOT WORKING!!!!!!!!!!!!!

// Capture scroll events
$(window).scroll(function(){
    checkAnimation();
});