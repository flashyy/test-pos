
function collect_same_elements(collection_a, object_b) {
      var C = new Array();
      var k ='0';
      for(var i=0;i < collection_a.length;i++){
      	  for (var j = 0; j < object_b.value.length; j++) {
      	  	   if(collection_a[i].key === object_b.value[j]){
      	  	   	   C[k] = object_b.value[j];
      	  	   	   k++;
      	  	   }
           };
      }
      return C;
}

module.exports = collect_same_elements;
