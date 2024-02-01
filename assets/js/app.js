// Game Developers
new DataTable('#games', {
    ajax: {
        url: 'https://l154gamer.github.io/api/software',
        dataType: 'JSON'
    },
    ordering: false,
    info: true,
    paging: true,
    dom: 'Pfrtip',
    "pageLength": 50,
    columns: [
        {
            data: 'title',
            render: function (data, type, row) {
                if (type === 'display') {
                    let link = 'https://l154gamer.github.io/lobby/';
                    return '<a class="uk-link-text" href="' + link + '' + row.url + '" >' + row.title + '</a>';        
                }
                return data;
            }
        },        
        {
            data: 'available',
            render: function (data, type, row) {return '' + row.available + '';}
        }
    ]
});

// Hacksaw Gaming
new DataTable('#hacksaw', {
    ajax: {
        url: 'https://l154gamer.github.io/api/hacksaw',
        dataType: 'JSON'
    },
    language: {
        url: 'https://cdn.datatables.net/plug-ins/1.13.7/i18n/id.json'
    },
    ordering: false,
    info: true,
    paging: true,
    dom: 'Pfrtip',
    "pageLength": 25,
    columns: [        
        {
            data: 'img',
            render: function (data, type, row) {
                if (type === 'display') {
                    let link = 'https://static-stg.hacksawgaming.com/launcher/static-launcher.html?channel=mobile&language=en&currency=USD&partner=demo&mode=demo&gameid=';
                    return '<a href="' + link + '' + row.gameID + '" target="modal_iframe" onClick="showModal()"><img src="https://l154gamer.github.io/assets/img/hacksaw/' + row.img + '" width="180px" class="uk-border-rounded" alt="' + row.title + '"></a>';        
                }
                return data;
            }
        },
        {
            data: 'title',
            render: function (data, type, row) {
                if (type === 'display') {
                    let link = 'https://static-stg.hacksawgaming.com/launcher/static-launcher.html?channel=mobile&language=en&currency=USD&partner=demo&mode=demo&gameid=';
                    return '<a class="uk-link-text" href="' + link + '' + row.gameID + '" target="modal_iframe" onClick="showModal()">' + row.title + '</a>';        
                }
                return data;
            }
        },     
        {
            data: 'gameID',
            render: function (data, type, row) {
                if (type === 'display') {
                    let link = 'https://static-stg.hacksawgaming.com/launcher/static-launcher.html?channel=mobile&language=en&currency=USD&partner=demo&mode=demo&gameid=';
                    return '<a class="uk-button uk-button-default uk-button-small" href="' + link + '' + row.gameID + '" target="modal_iframe" onClick="showModal()">Play</a>';             
                }
                return data;
            }
        }
    ]
});

// Pragmatic Play
new DataTable('#pragmaticplay', {
    ajax: {
        url: 'https://l154gamer.github.io/api/pragmaticplay',
        dataType: 'JSON'
    },
    language: {
        url: 'https://cdn.datatables.net/plug-ins/1.13.7/i18n/id.json'
    },
    ordering: false,
    info: true,
    paging: true,
    dom: 'Pfrtip',
    "pageLength": 25,
    columns: [        
        {
            data: 'img',
            render: function (data, type, row) {
                if (type === 'display') {
                    let link = 'https://d3pvfi6m7bxu71.cloudfront.net/gs2c/openGame.do?jurisdiction=99&lang=ID&cur=IDR&gameSymbol=';
                    return '<a href="' + link + '' + row.symbol + '" target="modal_iframe" onClick="showModal()"><img src="https://l154gamer.github.io/assets/img/pragmatic-play/' + row.img + '" width="300px" class="uk-border-rounded" alt="' + row.title + '"></a>';        
                }
                return data;
            }
        },
        {
            data: 'title',
            render: function (data, type, row) {
                if (type === 'display') {
                    let link = 'https://d3pvfi6m7bxu71.cloudfront.net/gs2c/openGame.do?jurisdiction=99&lang=ID&cur=IDR&gameSymbol=';
                    return '<a class="uk-link-text" href="' + link + '' + row.symbol + '" target="modal_iframe" onClick="showModal()">' + row.title + '</a>';        
                }
                return data;
            }
        },     
        {
            data: 'gameID',
            render: function (data, type, row) {
                if (type === 'display') {
                    let link = 'https://d3pvfi6m7bxu71.cloudfront.net/gs2c/openGame.do?jurisdiction=99&lang=ID&cur=IDR&gameSymbol=';
                    return '<a class="uk-button uk-button-default uk-button-small" href="' + link + '' + row.symbol + '" target="modal_iframe" onClick="showModal()">Play</a>';             
                }
                return data;
            }
        }
    ]
});

