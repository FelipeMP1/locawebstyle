window.tourGuiado={},tourGuiado=function(){"use strict";function t(){locastyle.guidedTour.init(d)}function e(){locastyle.guidedTour.init(h)}function n(){locastyle.guidedTour.init(f)}function a(){locastyle.guidedTour.init(p)}function i(){locastyle.guidedTour.init(m)}function s(){locastyle.guidedTour.init(g)}function o(){locastyle.guidedTour.init(v)}function r(){locastyle.guidedTour.init(y)}function l(){locastyle.guidedTour.init(b)}function c(){locastyle.guidedTour.init(w)}function u(){locastyle.guidedTour.init(_)}var d={id:"tourDemo",selectors:{init:"#demo-init"},i18n:{nextBtn:"Pr\xf3ximo",prevBtn:"Anterior",doneBtn:"Ok",skipBtn:"Sair",closeTooltip:"Fechar"},bubbleWidth:250,showPrevButton:!0,steps:[{target:".ls-menu",title:"Menu",content:"Acesse de forma r\xe1pida os recursos mais importantes.",placement:"right",arrowOffset:"center"},{target:".ls-ico-dashboard",title:"Consumo",content:"Acompanhe o consumo dos envios do seu plano no per\xedodo.",placement:"top",arrowOffset:"center"},{target:".ls-ico-user-add .ls-btn-primary",title:"Comece por aqui",content:"Cadastre seus clientes e adicione envios.",placement:"top",arrowOffset:"center"},{target:".ls-ico-user-add ~ .ls-title-3",title:"Personalize sua revenda",content:"Siga os passos abaixo para personalizar sua revenda.",placement:"top",arrowOffset:"center",xOffset:-30},{target:".ls-user-account",title:"Sua conta",content:"Detalhes de seu login Locaweb.",placement:"bottom",arrowOffset:"center",xOffset:-50},{target:".ls-alerts-list",title:"Ficou com d\xfavidas?",content:"Acesse nossos canais de ajuda.",placement:"bottom",arrowOffset:"center",xOffset:-50},{target:".ls-alerts-list",title:"Ajude a melhorar o painel",content:"Fique \xe0 vontade para enviar sugest\xf5es e coment\xe1rios.",placement:"bottom",arrowOffset:"center",xOffset:-90}]},h={id:"tourDemo",selectors:{init:"#demo-init"},i18n:{nextBtn:"Pr\xf3ximo",prevBtn:"Anterior",doneBtn:"Ok",skipBtn:"Sair",closeTooltip:"Fechar"},bubbleWidth:250,showPrevButton:!0,steps:[{target:".ls-menu",title:"Menu",content:"Acesse de forma r\xe1pida os recursos mais importantes.",placement:"right",arrowOffset:"center"},{target:".ls-ico-dashboard",title:"Consumo",content:"Acompanhe o consumo dos envios do seu plano no per\xedodo.",placement:"top",arrowOffset:"center"},{target:".ls-board-box ~ .ls-title-3",title:"Cliente que contrataram",content:"Acompanhe os clientes que mais contrataram no per\xedodo.",placement:"top",arrowOffset:"center"},{target:".col-md-6 .ls-title-3",title:"Sem saldo de envio",content:"Saiba quais clientes est\xe3o sem saldo e ofere\xe7a mais envios.",placement:"top",arrowOffset:"center"},{target:".col-md-6:nth-child(2) .ls-title-3",title:"Bloqueados por bounce",content:'Saiba quais clientes foram bloqueados por abuso de bounces. Consulte a <a href="http://wiki.locaweb.com.br/pt-br/Bounces" target="_blank">pol\xedtica de bounce</a>.',placement:"top",arrowOffset:"center"},{target:".ls-user-account",title:"Sua conta",content:"Detalhes de seu login Locaweb.1",placement:"bottom",arrowOffset:"center",xOffset:-50},{target:".ls-alerts-list",title:"Ficou com d\xfavidas?",content:"Acesse nossos canais de ajuda.",placement:"bottom",arrowOffset:"center",xOffset:-50},{target:".ls-alerts-list",title:"Ajude a melhorar o painel",content:"Fique \xe0 vontade para enviar sugest\xf5es e coment\xe1rios.",placement:"bottom",arrowOffset:"center",xOffset:-90}]},f={id:"tourDemo",selectors:{init:"#demo-init"},i18n:{nextBtn:"Pr\xf3ximo",prevBtn:"Anterior",doneBtn:"Ok",skipBtn:"Sair",closeTooltip:"Fechar"},bubbleWidth:250,showPrevButton:!0,steps:[{target:".ls-main .ls-btn-primary",title:"Cadastre um novo cliente",content:"Adicione seus novos clientes.",placement:"top",arrowOffset:"center",xOffset:-75},{target:".ls-custom-select-one:nth-child(1)",title:"Filtro por status",content:"Busque um cliente por status.",placement:"top",arrowOffset:"center"},{target:".ls-box-filter form:nth-child(2) input",title:"Busca por nome",content:"Procure um cliente por nome.",placement:"left",arrowOffset:"center",yOffset:-55,xOffset:30},{target:".ls-table th:nth-child(3)",title:"Validade dos envios do cliente",content:"Acompanhe a quantidade e validade de uso dos envios para este cliente.",placement:"top",arrowOffset:"center"},{target:".ls-table tr:nth-child(1) .ls-regroup .ls-btn",title:"Administre seu cliente",content:"Edite os dados, a distribui\xe7\xe3o de envios e acompanhe o uso de cada cliente.",placement:"left",arrowOffset:"center",yOffset:-70,xOffset:35}]},p={id:"tourDemo",selectors:{init:"#demo-init"},i18n:{nextBtn:"Pr\xf3ximo",prevBtn:"Anterior",doneBtn:"Ok",skipBtn:"Sair",closeTooltip:"Fechar"},bubbleWidth:250,showPrevButton:!0,steps:[{target:".ls-form legend",title:"Informa\xe7\xf5es do seu cliente",content:"Preencha os dados do seu cliente e defina uma senha para ele acessar o painel.",placement:"top",arrowOffset:"center"},{target:".ls-box-gray .row .ls-label:nth-child(2)",title:"Quantidade de envios",content:"Defina a quantidade de envios que seu cliente poder\xe1 utilizar.",placement:"top",arrowOffset:"center"},{target:".ls-box-gray .ls-label:nth-child(3)",title:"Recorr\xeancia",content:"Marque se ele vai receber esta mesma quantidade todo m\xeas.",placement:"top",arrowOffset:"center"}]},m={id:"tourDemo",selectors:{init:"#demo-init"},i18n:{nextBtn:"Pr\xf3ximo",prevBtn:"Anterior",doneBtn:"Ok",skipBtn:"Sair",closeTooltip:"Fechar"},bubbleWidth:250,showPrevButton:!0,steps:[{target:".ls-regroup .ls-btn-primary",title:"Acesso ao painel do seu cliente",content:"Tenha acesso ao painel do cliente.",placement:"left",arrowOffset:"center",yOffset:-80,xOffset:35,onNext:function(){$(".ls-main .ls-dropdown .ls-btn").click()}},{target:".ls-dropdown .ls-btn",title:"Gerencie seu cliente",content:"Edite os dados, altere a senha ou desative o cliente.",placement:"left",arrowOffset:"center",xOffset:40,yOffset:-60,onNext:function(){$(".ls-main .ls-dropdown .ls-btn").click()},onPrev:function(){$(".ls-main .ls-dropdown .ls-btn").click()}},{target:".ls-ico-calendar-check",title:"Envios dispon\xedveis dos per\xedodos",content:"Altere a quantidade de envios dispon\xedveis no per\xedodo atual ou no pr\xf3ximo per\xedodo.",placement:"top",arrowOffset:"center"},{target:".ls-main h3.ls-title-3",title:"Relat\xf3rios",content:"Acompanhe o relat\xf3rio de contrata\xe7\xe3o e uso dos envios.",placement:"right",arrowOffset:"center",xOffset:-500,yOffset:-60},{target:".container-fluid > .ls-title-3",title:"Hist\xf3rico",content:"Acompanhe o hist\xf3rico de distribui\xe7\xe3o de envios.",placement:"top",arrowOffset:"center"}]},g={id:"tourDemo",selectors:{init:"#demo-init"},i18n:{nextBtn:"Pr\xf3ximo",prevBtn:"Anterior",doneBtn:"Ok",skipBtn:"Sair",closeTooltip:"Fechar"},bubbleWidth:250,showPrevButton:!0,steps:[{target:".ls-tabs-nav",title:"Relat\xf3rios da sua revenda",content:"Acompanhe a distribui\xe7\xe3o de envios e dos status de seus clientes.",placement:"top",arrowOffset:"center"}]},v={id:"tourDemo",selectors:{init:"#demo-init"},i18n:{nextBtn:"Pr\xf3ximo",prevBtn:"Anterior",doneBtn:"Ok",skipBtn:"Sair",closeTooltip:"Fechar"},bubbleWidth:250,showPrevButton:!0,steps:[{target:".col-md-6:nth-child(1) .ls-title-2",title:"Dom\xednio dos links",content:"Personalize o padr\xe3o do dom\xednio dos links das mensagens que seus clientes enviam.",placement:"top",arrowOffset:"center"},{target:".col-md-6:nth-child(2) .ls-title-2",title:"Dom\xednio de acesso",content:"Personalize o dom\xednio que seu cliente acessa o painel da sua revenda.",placement:"top",arrowOffset:"center"}]},y={id:"tourDemo",selectors:{init:"#demo-init"},i18n:{nextBtn:"Pr\xf3ximo",prevBtn:"Anterior",doneBtn:"Ok",skipBtn:"Sair",closeTooltip:"Fechar"},bubbleWidth:250,showPrevButton:!0,steps:[{target:".ls-form",title:"E-mail de remetente da sua revenda",content:"Configure o e-mail que seus clientes receber\xe3o.",placement:"top",arrowOffset:"center"}]},b={id:"tourDemo",selectors:{init:"#demo-init"},i18n:{nextBtn:"Pr\xf3ximo",prevBtn:"Anterior",doneBtn:"Ok",skipBtn:"Sair",closeTooltip:"Fechar"},bubbleWidth:250,showPrevButton:!0,steps:[{target:".ls-main img",title:"Exemplo do painel de seus clientes",content:"Veja como fica o painel da sua revenda para seus clientes.",placement:"top",arrowOffset:"center",xOffset:-50},{target:".ls-main .ls-box .ls-label",title:"Personalize o nome da revenda ",content:"Deixe o nome da revenda com o nome da sua empresa.",placement:"top",arrowOffset:"center"},{target:".ls-main .ls-box:nth-child(2)",title:"Identifica\xe7\xe3o da sua marca",content:"Defina como ser\xe1 exibido o cabe\xe7alho do painel e dos e-mails que seus clientes recebem da sua revenda.",placement:"top",arrowOffset:"center"},{target:".ls-main .col-md-9 > .ls-box:nth-child(3)",title:"Personalize a cor",content:"Escolha a cor do painel que combine com sua empresa.",placement:"top",arrowOffset:"center"}]},w={id:"tourDemo",selectors:{init:"#demo-init"},i18n:{nextBtn:"Pr\xf3ximo",prevBtn:"Anterior",doneBtn:"Ok",skipBtn:"Sair",closeTooltip:"Fechar"},bubbleWidth:250,showPrevButton:!0,steps:[{target:".ls-main .col-md-6:nth-child(1) .ls-form",title:"Ofere\xe7a suporte por telefone",content:"Preencha o n\xfamero que ser\xe1 exibido no rodap\xe9 do painel do seu cliente.",placement:"top",arrowOffset:"center"},{target:".ls-main .col-md-6:nth-child(2) .ls-form",title:"Ofere\xe7a suporte por um sistema de chamados",content:"Preencha o endere\xe7o da sua conta Webdesk. O link ser\xe1 exibido no rodap\xe9 do painel do seu cliente.",placement:"top",arrowOffset:"center"}]},_={id:"tourDemo",selectors:{init:"#demo-init"},i18n:{nextBtn:"Pr\xf3ximo",prevBtn:"Anterior",doneBtn:"Ok",skipBtn:"Sair",closeTooltip:"Fechar"},bubbleWidth:250,showPrevButton:!0,steps:[{target:".ls-box",title:"Integre com outros sistemas",content:"Utilize os dados para autenticar suas chamadas na API.",placement:"top",arrowOffset:"center"}]};return{firstTour:t,homeTour:e,clientTour:n,registerClientTour:a,adminClientTour:i,statsTour:s,configDomainTour:o,configEmailTour:r,configAspectTour:l,configAnswerTour:c,configApiTour:u}}(),window.setTimeout(function(){var t=$("body");t.hasClass("documentacao_exemplos_painel1_base_index")&&tourGuiado.firstTour(),t.hasClass("documentacao_exemplos_painel1_home")&&tourGuiado.homeTour(),t.hasClass("documentacao_exemplos_painel1_clients")&&tourGuiado.clientTour(),t.hasClass("documentacao_exemplos_painel1_new-client")&&tourGuiado.registerClientTour(),t.hasClass("documentacao_exemplos_painel1_client")&&tourGuiado.adminClientTour(),t.hasClass("documentacao_exemplos_painel1_stats")&&tourGuiado.statsTour(),t.hasClass("documentacao_exemplos_painel1_config-domain")&&tourGuiado.configDomainTour(),t.hasClass("documentacao_exemplos_painel1_config-email")&&tourGuiado.configEmailTour(),t.hasClass("documentacao_exemplos_painel1_config-aspect")&&tourGuiado.configAspectTour(),t.hasClass("documentacao_exemplos_painel1_config-answer")&&tourGuiado.configAnswerTour(),t.hasClass("documentacao_exemplos_painel1_config-api")&&tourGuiado.configApiTour()},1e3);var lsexample=function(){"use strict";function t(){e()}function e(){var t=window.location.pathname;t=t.replace(/\/$/,""),t=decodeURIComponent(t),$(".documentacao_componentes .ls-menu a").each(function(){var e=$(this).attr("href");t.substring(0,e.length)===e&&($(this).closest("li").addClass("ls-active"),$(this).parents(".ls-submenu-parent").find("a").trigger("click"))})}return{init:t}}();$(window).on("load",function(){lsexample.init()});