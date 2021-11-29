function generateCode()
{
var generatedXMLCode=String("");
var generatedTEXTCode=String("");
var generatedHTMLCode=String("");
var generatedXHTMLCode=String("");
var results=$("#results");
var title=[];title=$('input[name="titleRow"]');
var creator=[];creator=$('input[name="creatorRow"]');
var subject=[];subject=$('input[name="subjectRow"]');
var description=[];description=$('textarea[name="descriptionRow"]');
var publisher=[];publisher=$('input[name="publisherRow"]');
var contributor=[];contributor=$('input[name="contributorRow"]');
var date=[];date=$('input[name="dateRow"]');
var type=[];type=$('input[name="typeRow"]');
var format=[];format=$('input[name="formatRow"]');
var identifier=[];identifier=$('input[name="identifierRow"]');
var source=[];source=$('input[name="sourceRow"]');
var language=[];language=$('input[name="languageRow"]');
var relation=[];relation=$('input[name="relationRow"]');
var coverage=[];coverage=$('input[name="coverageRow"]');
var rights=[];rights=$('input[name="rightsRow"]');
var adddeclaration=$("#adddeclaration");
var addroot=$("#addroot");
var adddc=$("#adddc");
var addhead=$("#addhead");
var addtitle=$("#addtitle");
var addlink=$("#addlink");
var adddeclarationhtml=$("#adddeclarationhtml");
var adddeclarationxhtml=$("#adddeclarationxhtml");
var addheadx=$("#addheadx");
var addtitlex=$("#addtitlex");
var addlinkx=$("#addlinkx");

if(adddeclaration.attr('checked')){
generatedXMLCode+="<?xml version=\"1.0\" encoding=\"UTF-8\"?>"+'\n'+'\n';}

if(addroot.attr('checked')){var rootname=$('#rootname').val();
generatedXMLCode+="<"+rootname+'\n'+"xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"";}

if((addroot.attr('checked'))!==(adddc.attr('checked'))){
generatedXMLCode+=">"+'\n';}

if(adddc.attr('checked')){
generatedXMLCode+='\n'+"xmlns:dc=\"http://purl.org/dc/elements/1.1/\"";}

if(adddc.attr('checked')){
generatedXMLCode+=">"+'\n';}

if((adddeclaration.attr('checked'))|(addroot.attr('checked'))|(adddc.attr('checked'))){
generatedXMLCode+='\n';}

if(adddeclarationhtml.attr('checked')){
generatedHTMLCode+="<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01//EN\""+'\n'+"\"http://www.w3.org/TR/html4/strict.dtd\">"+'\n'+"<html>"+'\n';}

if(addhead.attr('checked')){
generatedHTMLCode+="<head profile=\"http://dublincore.org/documents/2008/08/04/dc-html/\">"+'\n';}

if(addtitle.attr('checked')){var titlename=document.getElementById('titlename');
generatedHTMLCode+="<title>"+titlename.value+"</title>"+'\n';}

if(addlink.attr('checked')){
generatedHTMLCode+="<link rel=\"schema.DC\" href=\"http://purl.org/dc/elements/1.1/\">"+'\n';}

if(adddeclarationxhtml.attr('checked')){
generatedXHTMLCode+="<?xml version=\"1.0\" encoding=\"UTF-8\" ?>"+'\n'+"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\""+'\n'+"\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">"+'\n'+"<html xmlns=\"http://www.w3.org/1999/xhtml\">"+'\n';}

if(addheadx.attr('checked')){
generatedXHTMLCode+="<head profile=\"http://dublincore.org/documents/2008/08/04/dc-html/\">"+'\n';}

if(addtitlex.attr('checked')){var titlenamex=document.getElementById('titlenamex');
generatedXHTMLCode+="<title>"+titlenamex.value+"</title>"+'\n';}

if(addlinkx.attr('checked')){
generatedXHTMLCode+="<link rel=\"schema.DC\" href=\"http://purl.org/dc/elements/1.1/\" />"+'\n';}//

for(i=0;i<=identifier.length-1;i++){
if((identifier[i].value.indexOf("http://")>-1)||(identifier[i].value.indexOf("www.")>-1)){
generatedXMLCode+="<dc:identifier>"+identifier[i].value+"</dc:identifier>"+'\n';
generatedTEXTCode+="Identifier: "+identifier[i].value+'\n';
generatedHTMLCode+="<link rel=\"DC.identifier\" href=\""+identifier[i].value+"\">"+'\n';
generatedXHTMLCode+="<link rel=\"DC.identifier\" href=\""+identifier[i].value+"\" />"+'\n';}

else if(identifier[i].value!==""){
generatedXMLCode+="<dc:identifier>"+identifier[i].value+"</dc:identifier>"+'\n';
generatedTEXTCode+="Identifier: "+identifier[i].value+'\n';
generatedHTMLCode+="<meta name=\"DC.identifier\" content=\""+identifier[i].value+"\">"+'\n';
generatedXHTMLCode+="<meta name=\"DC.identifier\" content=\""+identifier[i].value+"\" />"+'\n';}}

for(i=0;i<=date.length-1;i++){
if((date[i].value.indexOf("http://")>-1)||(date[i].value.indexOf("www.")>-1)){
generatedXMLCode+="<dc:date>"+date[i].value+"</dc:date>"+'\n';
generatedTEXTCode+="Date: "+date[i].value+'\n';
generatedHTMLCode+="<link rel=\"DC.Date\" href=\""+date[i].value+"\">"+'\n';
generatedXHTMLCode+="<link rel=\"DC.Date\" href=\""+date[i].value+"\" />"+'\n';}

else if(date[i].value!==""){
generatedXMLCode+="<dc:date>"+date[i].value+"</dc:date>"+'\n';
generatedTEXTCode+="Date: "+date[i].value+'\n';
generatedHTMLCode+="<meta name=\"DC.Date\" content=\""+date[i].value+"\">"+'\n';
generatedXHTMLCode+="<meta name=\"DC.Date\" content=\""+date[i].value+"\" />"+'\n';}}

for(i=0;i<=title.length-1;i++){
if((title[i].value.indexOf("http://")>-1)||(title[i].value.indexOf("www.")>-1)){
generatedXMLCode+="<dc:title>"+title[i].value+"</dc:title>"+'\n';
generatedTEXTCode+="Title: "+title[i].value+'\n';
generatedHTMLCode+="<link rel=\"DC.Title\" href=\""+title[i].value+"\">"+'\n';
generatedXHTMLCode+="<link rel=\"DC.Title\" href=\""+title[i].value+"\" />"+'\n';}

else if(title[i].value!==""){
generatedXMLCode+="<dc:title>"+title[i].value+"</dc:title>"+'\n';
generatedTEXTCode+="Title: "+title[i].value+'\n';
generatedHTMLCode+="<meta name=\"DC.Title\" content=\""+title[i].value+"\">"+'\n';
generatedXHTMLCode+="<meta name=\"DC.Title\" content=\""+title[i].value+"\" />"+'\n';}}

for(i=0;i<=creator.length-1;i++){
if((creator[i].value.indexOf("http://")>-1)||(creator[i].value.indexOf("www.")>-1)){
generatedXMLCode+="<dc:creator>"+creator[i].value+"</dc:creator>"+'\n';
generatedTEXTCode+="Creator: "+creator[i].value+'\n';
generatedHTMLCode+="<link rel=\"DC.Creator\" href=\""+creator[i].value+"\">"+'\n';
generatedXHTMLCode+="<link rel=\"DC.Creator\" href=\""+creator[i].value+"\" />"+'\n';}

else if(creator[i].value!==""){
generatedXMLCode+="<dc:creator>"+creator[i].value+"</dc:creator>"+'\n';
generatedTEXTCode+="Creator: "+creator[i].value+'\n';
generatedHTMLCode+="<meta name=\"DC.Creator\" content=\""+creator[i].value+"\">"+'\n';
generatedXHTMLCode+="<meta name=\"DC.Creator\" content=\""+creator[i].value+"\" />"+'\n';}}

for(i=0;i<=coverage.length-1;i++){
if((coverage[i].value.indexOf("http://")>-1)||(coverage[i].value.indexOf("www.")>-1)){
generatedXMLCode+="<dc:coverage>"+coverage[i].value+"</dc:coverage>"+'\n';
generatedTEXTCode+="Coverage: "+coverage[i].value+'\n';
generatedHTMLCode+="<link rel=\"DC.Coverage\" href=\""+coverage[i].value+"\">"+'\n';
generatedXHTMLCode+="<link rel=\"DC.Coverage\" href=\""+coverage[i].value+"\" />"+'\n';}

else if(coverage[i].value!==""){
generatedXMLCode+="<dc:coverage>"+coverage[i].value+"</dc:coverage>"+'\n';
generatedTEXTCode+="Coverage: "+coverage[i].value+'\n';
generatedHTMLCode+="<meta name=\"DC.Coverage\" content=\""+coverage[i].value+"\">"+'\n';
generatedXHTMLCode+="<meta name=\"DC.Coverage\" content=\""+coverage[i].value+"\" />"+'\n';}}

for(i=0;i<=subject.length-1;i++){
if((subject[i].value.indexOf("http://")>-1)||(subject[i].value.indexOf("www.")>-1)){
generatedXMLCode+="<dc:subject>"+subject[i].value+"</dc:subject>"+'\n';
generatedTEXTCode+="Subject: "+subject[i].value+'\n';
generatedHTMLCode+="<link rel=\"DC.Subject\" href=\""+subject[i].value+"\">"+'\n';
generatedXHTMLCode+="<link rel=\"DC.Subject\" href=\""+subject[i].value+"\" />"+'\n';}

else if(subject[i].value!==""){
generatedXMLCode+="<dc:subject>"+subject[i].value+"</dc:subject>"+'\n';
generatedTEXTCode+="Subject: "+subject[i].value+'\n';
generatedHTMLCode+="<meta name=\"DC.Subject\" content=\""+subject[i].value+"\">"+'\n';
generatedXHTMLCode+="<meta name=\"DC.Subject\" content=\""+subject[i].value+"\" />"+'\n';}}




for(i=0;i<=publisher.length-1;i++){
if((publisher[i].value.indexOf("http://")>-1)||(publisher[i].value.indexOf("www.")>-1)){
generatedXMLCode+="<dc:publisher>"+publisher[i].value+"</dc:publisher>"+'\n';
generatedTEXTCode+="Publisher: "+publisher[i].value+'\n';
generatedHTMLCode+="<link rel=\"DC.Publisher\" href=\""+publisher[i].value+"\">"+'\n';
generatedXHTMLCode+="<link rel=\"DC.Publisher\" href=\""+publisher[i].value+"\" />"+'\n';}

else if(publisher[i].value!==""){
generatedXMLCode+="<dc:publisher>"+publisher[i].value+"</dc:publisher>"+'\n';
generatedTEXTCode+="Publisher: "+publisher[i].value+'\n';
generatedHTMLCode+="<meta name=\"DC.Publisher\" content=\""+publisher[i].value+"\">"+'\n';
generatedXHTMLCode+="<meta name=\"DC.Publisher\" content=\""+publisher[i].value+"\" />"+'\n';}}

for(i=0;i<=description.length-1;i++){
if((description[i].value.indexOf("http://")>-1)||(description[i].value.indexOf("www.")>-1)){
generatedXMLCode+="<dc:description>"+description[i].value+"</dc:description>"+'\n';
generatedTEXTCode+="Description: "+description[i].value+'\n';
generatedHTMLCode+="<link rel=\"DC.Description\" href=\""+description[i].value+"\">"+'\n';
generatedXHTMLCode+="<link rel=\"DC.Description\" href=\""+description[i].value+"\" />"+'\n';}

else if(description[i].value!==""){
generatedXMLCode+="<dc:description>"+description[i].value+"</dc:description>"+'\n';
generatedTEXTCode+="Description: "+description[i].value+'\n';
generatedHTMLCode+="<meta name=\"DC.Description\" content=\""+description[i].value+"\">"+'\n';
generatedXHTMLCode+="<meta name=\"DC.Description\" content=\""+description[i].value+"\" />"+'\n';}}

for(i=0;i<=contributor.length-1;i++){
if((contributor[i].value.indexOf("http://")>-1)||(contributor[i].value.indexOf("www.")>-1)){
generatedXMLCode+="<dc:contributor>"+contributor[i].value+"</dc:contributor>"+'\n';
generatedTEXTCode+="Contributor: "+contributor[i].value+'\n';
generatedHTMLCode+="<link rel=\"DC.Contributor\" href=\""+contributor[i].value+"\">"+'\n';
generatedXHTMLCode+="<link rel=\"DC.Contributor\" href=\""+contributor[i].value+"\" />"+'\n';}

else if(contributor[i].value!==""){
generatedXMLCode+="<dc:contributor>"+contributor[i].value+"</dc:contributor>"+'\n';
generatedTEXTCode+="Contributor: "+contributor[i].value+'\n';
generatedHTMLCode+="<meta name=\"DC.Contributor\" content=\""+contributor[i].value+"\">"+'\n';
generatedXHTMLCode+="<meta name=\"DC.Contributor\" content=\""+contributor[i].value+"\" />"+'\n';}}



for(i=0;i<=type.length-1;i++){
if((type[i].value.indexOf("http://")>-1)||(type[i].value.indexOf("www.")>-1)){
generatedXMLCode+="<dc:type>"+type[i].value+"</dc:type>"+'\n';
generatedTEXTCode+="Type: "+type[i].value+'\n';
generatedHTMLCode+="<link rel=\"DC.Type\" href=\""+type[i].value+"\">"+'\n';
generatedXHTMLCode+="<link rel=\"DC.Type\" href=\""+type[i].value+"\" />"+'\n';}

else if(type[i].value!==""){
generatedXMLCode+="<dc:type>"+type[i].value+"</dc:type>"+'\n';
generatedTEXTCode+="Type: "+type[i].value+'\n';
generatedHTMLCode+="<meta name=\"DC.Type\" content=\""+type[i].value+"\">"+'\n';
generatedXHTMLCode+="<meta name=\"DC.Type\" content=\""+type[i].value+"\" />"+'\n';}}


for(i=0;i<=format.length-1;i++){
if((format[i].value.indexOf("http://")>-1)||(format[i].value.indexOf("www.")>-1)){
generatedXMLCode+="<dc:format>"+format[i].value+"</dc:format>"+'\n';
generatedTEXTCode+="Format: "+format[i].value+'\n';
generatedHTMLCode+="<link rel=\"DC.Format\" href=\""+format[i].value+"\">"+'\n';
generatedXHTMLCode+="<link rel=\"DC.Format\" href=\""+format[i].value+"\" />"+'\n';}

else if(format[i].value!==""){
generatedXMLCode+="<dc:format>"+format[i].value+"</dc:format>"+'\n';
generatedTEXTCode+="Format: "+format[i].value+'\n';
generatedHTMLCode+="<meta name=\"DC.Format\" content=\""+format[i].value+"\">"+'\n';
generatedXHTMLCode+="<meta name=\"DC.Format\" content=\""+format[i].value+"\" />"+'\n';}}

for(i=0;i<=language.length-1;i++){
if((language[i].value.indexOf("http://")>-1)||(language[i].value.indexOf("www.")>-1)){
generatedXMLCode+="<dc:language>"+language[i].value+"</dc:language>"+'\n';
generatedTEXTCode+="Language: "+language[i].value+'\n';
generatedHTMLCode+="<link rel=\"DC.Language\" href=\""+language[i].value+"\">"+'\n';
generatedXHTMLCode+="<link rel=\"DC.Language\" href=\""+language[i].value+"\" />"+'\n';}

else if(language[i].value!==""){
generatedXMLCode+="<dc:language>"+language[i].value+"</dc:language>"+'\n';
generatedTEXTCode+="Language: "+language[i].value+'\n';
generatedHTMLCode+="<meta name=\"DC.Language\" content=\""+language[i].value+"\">"+'\n';
generatedXHTMLCode+="<meta name=\"DC.Language\" content=\""+language[i].value+"\" />"+'\n';}}


for(i=0;i<=source.length-1;i++){
if((source[i].value.indexOf("http://")>-1)||(source[i].value.indexOf("www.")>-1)){
generatedXMLCode+="<dc:source>"+source[i].value+"</dc:source>"+'\n';
generatedTEXTCode+="Source: "+source[i].value+'\n';
generatedHTMLCode+="<link rel=\"DC.Source\" href=\""+source[i].value+"\">"+'\n';
generatedXHTMLCode+="<link rel=\"DC.Source\" href=\""+source[i].value+"\" />"+'\n';}

else if(source[i].value!==""){
generatedXMLCode+="<dc:source>"+source[i].value+"</dc:source>"+'\n';
generatedTEXTCode+="Source: "+source[i].value+'\n';
generatedHTMLCode+="<meta name=\"DC.Source\" content=\""+source[i].value+"\">"+'\n';
generatedXHTMLCode+="<meta name=\"DC.Source\" content=\""+source[i].value+"\" />"+'\n';}}




for(i=0;i<=relation.length-1;i++){
if((relation[i].value.indexOf("http://")>-1)||(relation[i].value.indexOf("www.")>-1)){
generatedXMLCode+="<dc:relation>"+relation[i].value+"</dc:relation>"+'\n';
generatedTEXTCode+="Relation: "+relation[i].value+'\n';
generatedHTMLCode+="<link rel=\"DC.Relation\" href=\""+relation[i].value+"\">"+'\n';
generatedXHTMLCode+="<link rel=\"DC.Relation\" href=\""+relation[i].value+"\" />"+'\n';}

else if(relation[i].value!==""){
generatedXMLCode+="<dc:relation>"+relation[i].value+"</dc:relation>"+'\n';
generatedTEXTCode+="Relation: "+relation[i].value+'\n';
generatedHTMLCode+="<meta name=\"DC.Relation\" content=\""+relation[i].value+"\">"+'\n';
generatedXHTMLCode+="<meta name=\"DC.Relation\" content=\""+relation[i].value+"\" />"+'\n';}}

for(i=0;i<=rights.length-1;i++){
if((rights[i].value.indexOf("http://")>-1)||(rights[i].value.indexOf("www.")>-1)){
generatedXMLCode+="<dc:rights>"+rights[i].value+"</dc:rights>"+'\n';
generatedTEXTCode+="Rights: "+rights[i].value+'\n';
generatedHTMLCode+="<link rel=\"DC.Rights\" href=\""+rights[i].value+"\">"+'\n';
generatedXHTMLCode+="<link rel=\"DC.Rights\" href=\""+rights[i].value+"\" />"+'\n';}

else if(rights[i].value!==""){
generatedXMLCode+="<dc:rights>"+rights[i].value+"</dc:rights>"+'\n';
generatedTEXTCode+="Rights: "+rights[i].value+'\n';
generatedHTMLCode+="<meta name=\"DC.Rights\" content=\""+rights[i].value+"\">"+'\n';
generatedXHTMLCode+="<meta name=\"DC.Rights\" content=\""+rights[i].value+"\" />"+'\n';}}


if($("#addroot").attr('checked')){var rootname=$('#rootname').val();
generatedXMLCode+='\n'+"<\/"+rootname+">";}

if($("#addhead").attr('checked')){
generatedHTMLCode+="</head>";}

if($("#adddeclarationhtml").attr('checked')){
generatedHTMLCode+='\n'+"<body>"+'\n'+"</body>"+'\n'+"</html>"}

if($("#addheadx").attr('checked')){
generatedXHTMLCode+="</head>";}

if($("#adddeclarationxhtml").attr('checked')){
generatedXHTMLCode+='\n'+"<body>"+'\n'+"</body>"+'\n'+"</html>"}

$('#xmlresults').val(generatedXMLCode);
$('#textresults').val(generatedTEXTCode);
$('#htmlresults').val(generatedHTMLCode);
$('#xhtmlresults').val(generatedXHTMLCode);
$('#generatebutton').blur();
}

function showHideOutput(){var value=$('#outputType').val();
if(value=="xml"){
$('#xmlresults').show();
$('#xmloptions').show();
$('#textresults').hide();
$('#textoptions').hide();
$('#htmlresults').hide();
$('#htmloptions').hide();
$('#xhtmlresults').hide();
$('#xhtmloptions').hide();
}
else if(value=="text"){
$('#xmlresults').hide();
$('#xmloptions').hide();
$('#textresults').show();
$('#textoptions').show();
$('#htmlresults').hide();
$('#htmloptions').hide();
$('#xhtmlresults').hide();
$('#xhtmloptions').hide();
}
else if(value=="html"){
$('#xmlresults').hide();
$('#xmloptions').hide();
$('#textresults').hide();
$('#textoptions').hide();
$('#htmlresults').show();
$('#htmloptions').show();
$('#xhtmlresults').hide();
$('#xhtmloptions').hide();
}
else if(value=="xhtml"){
$('#xmlresults').hide();
$('#xmloptions').hide();
$('#textresults').hide();
$('#textoptions').hide();
$('#htmlresults').hide();
$('#htmloptions').hide();
$('#xhtmlresults').show();
$('#xhtmloptions').show();
}}
function showHideLanguage(){var value=$('#outputLanguage').val();
if(value=="arabic"){
$('.arabic').show();
$('.english').hide();
}
else if(value=="english"){
$('.arabic').hide();
$('.english').show();
}}
