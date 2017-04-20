



onGetCaptureValue: function (formMappingId, value, controls) {
  if(formMappingId===418506){

   value = (function(dl){
     for(var i=0;i<dl.length;i++)
     if(dl[i]['user.profile.country'])
     return dl[i]['user.profile.country'];
   })(dataLayer);

  }
  return value;
}
