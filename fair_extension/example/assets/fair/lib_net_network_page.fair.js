GLOBAL['#FairKey#']=(function(__initProps__){const __global__=this;return runCallback(function(__mod__){with(__mod__.imports){function ItemData(){const inner=ItemData.__inner__;if(this==__global__){return new ItemData({__args__:arguments});}else{const args=arguments.length>0?arguments[0].__args__||arguments:[];inner.apply(this,args);ItemData.prototype.ctor.apply(this,args);return this;}}ItemData.__inner__=function inner(){this.picUrl='';};ItemData.prototype={};ItemData.prototype.ctor=function(){};function _NetworkPageState(){const inner=_NetworkPageState.__inner__;if(this==__global__){return new _NetworkPageState({__args__:arguments});}else{const args=arguments.length>0?arguments[0].__args__||arguments:[];inner.apply(this,args);_NetworkPageState.prototype.ctor.apply(this,args);return this;}}_NetworkPageState.__inner__=function inner(){this._listData=[];this._page=0;};_NetworkPageState.prototype={onLoad:function onLoad(){const __thiz__=this;with(__thiz__){requestDataFromNet();}},onUnload:function onUnload(){const __thiz__=this;with(__thiz__){}},requestDataFromNet:function requestDataFromNet(){const __thiz__=this;with(__thiz__){_page++;FairNet.requestData({method:FairNet.GET,url:'https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/6f8e5d9e196cbaa4a46041928770b187_grid_data.json',data:convertObjectLiteralToSetOrMap({['page']:_page,}),success:function dummy(resp){if(resp==null){return null;}let data=resp.__op_idx__('data');data.forEach(function dummy(item){let dataItem=ItemData();dataItem.picUrl=item.__op_idx__('imagePath');_listData.add(dataItem);});setState('#FairKey#',function dummy(){});}});}},isDataEmpty:function isDataEmpty(){const __thiz__=this;with(__thiz__){return _listData.isEmpty;}},};_NetworkPageState.prototype.ctor=function(){};;return _NetworkPageState();}},[]);})(convertObjectLiteralToSetOrMap(JSON.parse('#FairProps#')));