Input.pressKey = function(code) {
    let evt = document.createEvent("UIEvents");
    evt.keyCode = 37;
    evt.initEvent("keydown", true, true);
    document.body.dispatchEvent(evt);
    setTimeout(function(){
        evt.initEvent("keyup", true, true);
        document.body.dispatchEvent(evt);
    }, 20);
}
if(typeof window.reineQJ_Button === "undefined"){
  (function () {
    window.reineQJ_Button = true
    var parameters = {
      "button": "[\"{\\\"id\\\":\\\"Button_Visible_Control\\\",\\\"namex\\\":\\\"TZ1\\\",\\\"pressChange\\\":\\\"false\\\",\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\",\\\"scale\\\":\\\"100\\\",\\\"opacity\\\":\\\"200\\\",\\\"type\\\":\\\"pressed\\\",\\\"commonevent\\\":\\\"0\\\",\\\"script\\\":\\\"\\\\\\\"window['TZButtonVisible'] = !window['TZButtonVisible'];\\\\\\\"\\\",\\\"textHide\\\":\\\"false\\\",\\\"switch\\\":\\\"0\\\",\\\"switchScript\\\":\\\"\\\",\\\"button\\\":\\\"\\\",\\\"showOnScene_Title\\\":\\\"true\\\",\\\"showOnScene_Map\\\":\\\"true\\\",\\\"showOnScene_Menu\\\":\\\"true\\\",\\\"showOnScene_Item\\\":\\\"true\\\",\\\"showOnScene_Skill\\\":\\\"true\\\",\\\"showOnScene_Equip\\\":\\\"true\\\",\\\"showOnScene_Save\\\":\\\"true\\\",\\\"showOnScene_Load\\\":\\\"true\\\",\\\"showOnScene_GameEnd\\\":\\\"true\\\",\\\"showOnScene_Shop\\\":\\\"true\\\",\\\"showOnScene_Name\\\":\\\"true\\\",\\\"showOnScene_Battle\\\":\\\"true\\\",\\\"showOnScene_Gameover\\\":\\\"true\\\",\\\"showOnScene_Options\\\":\\\"true\\\",\\\"showOn\\\":\\\"\\\"}\",\"{\\\"id\\\":\\\"q\\\",\\\"namex\\\":\\\"TZ7Q\\\",\\\"pressChange\\\":\\\"false\\\",\\\"x\\\":\\\"w-bw*2.5\\\",\\\"y\\\":\\\"h-bh*3.2\\\",\\\"scale\\\":\\\"100\\\",\\\"opacity\\\":\\\"200\\\",\\\"type\\\":\\\"pressed\\\",\\\"commonevent\\\":\\\"0\\\",\\\"script\\\":\\\"\\\\\\\"Input.pressKey(81)\\\\\\\"\\\",\\\"textHide\\\":\\\"false\\\",\\\"switch\\\":\\\"0\\\",\\\"switchScript\\\":\\\"\\\\\\\"!window['TZButtonVisible']\\\\\\\"\\\",\\\"button\\\":\\\"\\\",\\\"showOnScene_Title\\\":\\\"true\\\",\\\"showOnScene_Map\\\":\\\"true\\\",\\\"showOnScene_Menu\\\":\\\"true\\\",\\\"showOnScene_Item\\\":\\\"true\\\",\\\"showOnScene_Skill\\\":\\\"true\\\",\\\"showOnScene_Equip\\\":\\\"true\\\",\\\"showOnScene_Save\\\":\\\"true\\\",\\\"showOnScene_Load\\\":\\\"true\\\",\\\"showOnScene_GameEnd\\\":\\\"true\\\",\\\"showOnScene_Shop\\\":\\\"true\\\",\\\"showOnScene_Name\\\":\\\"true\\\",\\\"showOnScene_Battle\\\":\\\"true\\\",\\\"showOnScene_Gameover\\\":\\\"true\\\",\\\"showOnScene_Options\\\":\\\"true\\\",\\\"showOn\\\":\\\"\\\"}\",\"{\\\"id\\\":\\\"e\\\",\\\"namex\\\":\\\"TZ7E\\\",\\\"pressChange\\\":\\\"false\\\",\\\"x\\\":\\\"w-bw*1.3\\\",\\\"y\\\":\\\"h-bh*3.2\\\",\\\"scale\\\":\\\"100\\\",\\\"opacity\\\":\\\"200\\\",\\\"type\\\":\\\"pressed\\\",\\\"commonevent\\\":\\\"0\\\",\\\"script\\\":\\\"\\\\\\\"Input.pressKey(69)\\\\\\\"\\\",\\\"textHide\\\":\\\"false\\\",\\\"switch\\\":\\\"0\\\",\\\"switchScript\\\":\\\"\\\\\\\"!window['TZButtonVisible']\\\\\\\"\\\",\\\"button\\\":\\\"\\\",\\\"showOnScene_Title\\\":\\\"true\\\",\\\"showOnScene_Map\\\":\\\"true\\\",\\\"showOnScene_Menu\\\":\\\"true\\\",\\\"showOnScene_Item\\\":\\\"true\\\",\\\"showOnScene_Skill\\\":\\\"true\\\",\\\"showOnScene_Equip\\\":\\\"true\\\",\\\"showOnScene_Save\\\":\\\"true\\\",\\\"showOnScene_Load\\\":\\\"true\\\",\\\"showOnScene_GameEnd\\\":\\\"true\\\",\\\"showOnScene_Shop\\\":\\\"true\\\",\\\"showOnScene_Name\\\":\\\"true\\\",\\\"showOnScene_Battle\\\":\\\"true\\\",\\\"showOnScene_Gameover\\\":\\\"true\\\",\\\"showOnScene_Options\\\":\\\"true\\\",\\\"showOn\\\":\\\"\\\"}\",\"{\\\"id\\\":\\\"pageup\\\",\\\"namex\\\":\\\"TZ4\\\",\\\"pressChange\\\":\\\"false\\\",\\\"x\\\":\\\"w-bw\\\",\\\"y\\\":\\\"bh*1.4\\\",\\\"scale\\\":\\\"100\\\",\\\"opacity\\\":\\\"200\\\",\\\"type\\\":\\\"pressed\\\",\\\"commonevent\\\":\\\"0\\\",\\\"script\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"textHide\\\":\\\"false\\\",\\\"switch\\\":\\\"0\\\",\\\"switchScript\\\":\\\"\\\\\\\"!window['TZButtonVisible']\\\\\\\"\\\",\\\"button\\\":\\\"pageup\\\",\\\"showOnScene_Title\\\":\\\"true\\\",\\\"showOnScene_Map\\\":\\\"true\\\",\\\"showOnScene_Menu\\\":\\\"true\\\",\\\"showOnScene_Item\\\":\\\"true\\\",\\\"showOnScene_Skill\\\":\\\"true\\\",\\\"showOnScene_Equip\\\":\\\"true\\\",\\\"showOnScene_Save\\\":\\\"true\\\",\\\"showOnScene_Load\\\":\\\"true\\\",\\\"showOnScene_GameEnd\\\":\\\"true\\\",\\\"showOnScene_Shop\\\":\\\"true\\\",\\\"showOnScene_Name\\\":\\\"true\\\",\\\"showOnScene_Battle\\\":\\\"true\\\",\\\"showOnScene_Gameover\\\":\\\"true\\\",\\\"showOnScene_Options\\\":\\\"true\\\",\\\"showOn\\\":\\\"\\\"}\",\"{\\\"id\\\":\\\"pagedown\\\",\\\"namex\\\":\\\"TZ5\\\",\\\"pressChange\\\":\\\"false\\\",\\\"x\\\":\\\"w-bw\\\",\\\"y\\\":\\\"bh*2*1.4\\\",\\\"scale\\\":\\\"100\\\",\\\"opacity\\\":\\\"200\\\",\\\"type\\\":\\\"pressed\\\",\\\"commonevent\\\":\\\"0\\\",\\\"script\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"textHide\\\":\\\"false\\\",\\\"switch\\\":\\\"0\\\",\\\"switchScript\\\":\\\"\\\\\\\"!window['TZButtonVisible']\\\\\\\"\\\",\\\"button\\\":\\\"pagedown\\\",\\\"showOnScene_Title\\\":\\\"true\\\",\\\"showOnScene_Map\\\":\\\"true\\\",\\\"showOnScene_Menu\\\":\\\"true\\\",\\\"showOnScene_Item\\\":\\\"true\\\",\\\"showOnScene_Skill\\\":\\\"true\\\",\\\"showOnScene_Equip\\\":\\\"true\\\",\\\"showOnScene_Save\\\":\\\"true\\\",\\\"showOnScene_Load\\\":\\\"true\\\",\\\"showOnScene_GameEnd\\\":\\\"true\\\",\\\"showOnScene_Shop\\\":\\\"true\\\",\\\"showOnScene_Name\\\":\\\"true\\\",\\\"showOnScene_Battle\\\":\\\"true\\\",\\\"showOnScene_Gameover\\\":\\\"true\\\",\\\"showOnScene_Options\\\":\\\"true\\\",\\\"showOn\\\":\\\"\\\"}\",\"{\\\"id\\\":\\\"move7\\\",\\\"namex\\\":\\\"TZ6\\\",\\\"pressChange\\\":\\\"false\\\",\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"h-bh*3\\\",\\\"scale\\\":\\\"100\\\",\\\"opacity\\\":\\\"200\\\",\\\"type\\\":\\\"pressed\\\",\\\"commonevent\\\":\\\"0\\\",\\\"script\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"textHide\\\":\\\"false\\\",\\\"switch\\\":\\\"0\\\",\\\"switchScript\\\":\\\"\\\\\\\"!window['TZButtonVisible']\\\\\\\"\\\",\\\"button\\\":\\\"left+up\\\",\\\"showOnScene_Title\\\":\\\"true\\\",\\\"showOnScene_Map\\\":\\\"true\\\",\\\"showOnScene_Menu\\\":\\\"true\\\",\\\"showOnScene_Item\\\":\\\"true\\\",\\\"showOnScene_Skill\\\":\\\"true\\\",\\\"showOnScene_Equip\\\":\\\"true\\\",\\\"showOnScene_Save\\\":\\\"true\\\",\\\"showOnScene_Load\\\":\\\"true\\\",\\\"showOnScene_GameEnd\\\":\\\"true\\\",\\\"showOnScene_Shop\\\":\\\"true\\\",\\\"showOnScene_Name\\\":\\\"true\\\",\\\"showOnScene_Battle\\\":\\\"true\\\",\\\"showOnScene_Gameover\\\":\\\"true\\\",\\\"showOnScene_Options\\\":\\\"true\\\",\\\"showOn\\\":\\\"\\\"}\",\"{\\\"id\\\":\\\"move8\\\",\\\"namex\\\":\\\"TZ6\\\",\\\"pressChange\\\":\\\"false\\\",\\\"x\\\":\\\"bw\\\",\\\"y\\\":\\\"h-bh*3\\\",\\\"scale\\\":\\\"100\\\",\\\"opacity\\\":\\\"200\\\",\\\"type\\\":\\\"pressed\\\",\\\"commonevent\\\":\\\"0\\\",\\\"script\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"textHide\\\":\\\"false\\\",\\\"switch\\\":\\\"0\\\",\\\"switchScript\\\":\\\"\\\\\\\"!window['TZButtonVisible']\\\\\\\"\\\",\\\"button\\\":\\\"up\\\",\\\"showOnScene_Title\\\":\\\"true\\\",\\\"showOnScene_Map\\\":\\\"true\\\",\\\"showOnScene_Menu\\\":\\\"true\\\",\\\"showOnScene_Item\\\":\\\"true\\\",\\\"showOnScene_Skill\\\":\\\"true\\\",\\\"showOnScene_Equip\\\":\\\"true\\\",\\\"showOnScene_Save\\\":\\\"true\\\",\\\"showOnScene_Load\\\":\\\"true\\\",\\\"showOnScene_GameEnd\\\":\\\"true\\\",\\\"showOnScene_Shop\\\":\\\"true\\\",\\\"showOnScene_Name\\\":\\\"true\\\",\\\"showOnScene_Battle\\\":\\\"true\\\",\\\"showOnScene_Gameover\\\":\\\"true\\\",\\\"showOnScene_Options\\\":\\\"true\\\",\\\"showOn\\\":\\\"\\\"}\",\"{\\\"id\\\":\\\"move9\\\",\\\"namex\\\":\\\"TZ6\\\",\\\"pressChange\\\":\\\"false\\\",\\\"x\\\":\\\"bw*2\\\",\\\"y\\\":\\\"h-bh*3\\\",\\\"scale\\\":\\\"100\\\",\\\"opacity\\\":\\\"200\\\",\\\"type\\\":\\\"pressed\\\",\\\"commonevent\\\":\\\"0\\\",\\\"script\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"textHide\\\":\\\"false\\\",\\\"switch\\\":\\\"0\\\",\\\"switchScript\\\":\\\"\\\\\\\"!window['TZButtonVisible']\\\\\\\"\\\",\\\"button\\\":\\\"right+up\\\",\\\"showOnScene_Title\\\":\\\"true\\\",\\\"showOnScene_Map\\\":\\\"true\\\",\\\"showOnScene_Menu\\\":\\\"true\\\",\\\"showOnScene_Item\\\":\\\"true\\\",\\\"showOnScene_Skill\\\":\\\"true\\\",\\\"showOnScene_Equip\\\":\\\"true\\\",\\\"showOnScene_Save\\\":\\\"true\\\",\\\"showOnScene_Load\\\":\\\"true\\\",\\\"showOnScene_GameEnd\\\":\\\"true\\\",\\\"showOnScene_Shop\\\":\\\"true\\\",\\\"showOnScene_Name\\\":\\\"true\\\",\\\"showOnScene_Battle\\\":\\\"true\\\",\\\"showOnScene_Gameover\\\":\\\"true\\\",\\\"showOnScene_Options\\\":\\\"true\\\",\\\"showOn\\\":\\\"\\\"}\",\"{\\\"id\\\":\\\"move4\\\",\\\"namex\\\":\\\"TZ6\\\",\\\"pressChange\\\":\\\"false\\\",\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"h-bh*2\\\",\\\"scale\\\":\\\"100\\\",\\\"opacity\\\":\\\"200\\\",\\\"type\\\":\\\"pressed\\\",\\\"commonevent\\\":\\\"0\\\",\\\"script\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"textHide\\\":\\\"false\\\",\\\"switch\\\":\\\"0\\\",\\\"switchScript\\\":\\\"\\\\\\\"!window['TZButtonVisible']\\\\\\\"\\\",\\\"button\\\":\\\"left\\\",\\\"showOnScene_Title\\\":\\\"true\\\",\\\"showOnScene_Map\\\":\\\"true\\\",\\\"showOnScene_Menu\\\":\\\"true\\\",\\\"showOnScene_Item\\\":\\\"true\\\",\\\"showOnScene_Skill\\\":\\\"true\\\",\\\"showOnScene_Equip\\\":\\\"true\\\",\\\"showOnScene_Save\\\":\\\"true\\\",\\\"showOnScene_Load\\\":\\\"true\\\",\\\"showOnScene_GameEnd\\\":\\\"true\\\",\\\"showOnScene_Shop\\\":\\\"true\\\",\\\"showOnScene_Name\\\":\\\"true\\\",\\\"showOnScene_Battle\\\":\\\"true\\\",\\\"showOnScene_Gameover\\\":\\\"true\\\",\\\"showOnScene_Options\\\":\\\"true\\\",\\\"showOn\\\":\\\"\\\"}\",\"{\\\"id\\\":\\\"move6\\\",\\\"namex\\\":\\\"TZ6\\\",\\\"pressChange\\\":\\\"false\\\",\\\"x\\\":\\\"bw*2\\\",\\\"y\\\":\\\"h-bh*2\\\",\\\"scale\\\":\\\"100\\\",\\\"opacity\\\":\\\"200\\\",\\\"type\\\":\\\"pressed\\\",\\\"commonevent\\\":\\\"0\\\",\\\"script\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"textHide\\\":\\\"false\\\",\\\"switch\\\":\\\"0\\\",\\\"switchScript\\\":\\\"\\\\\\\"!window['TZButtonVisible']\\\\\\\"\\\",\\\"button\\\":\\\"right\\\",\\\"showOnScene_Title\\\":\\\"true\\\",\\\"showOnScene_Map\\\":\\\"true\\\",\\\"showOnScene_Menu\\\":\\\"true\\\",\\\"showOnScene_Item\\\":\\\"true\\\",\\\"showOnScene_Skill\\\":\\\"true\\\",\\\"showOnScene_Equip\\\":\\\"true\\\",\\\"showOnScene_Save\\\":\\\"true\\\",\\\"showOnScene_Load\\\":\\\"true\\\",\\\"showOnScene_GameEnd\\\":\\\"true\\\",\\\"showOnScene_Shop\\\":\\\"true\\\",\\\"showOnScene_Name\\\":\\\"true\\\",\\\"showOnScene_Battle\\\":\\\"true\\\",\\\"showOnScene_Gameover\\\":\\\"true\\\",\\\"showOnScene_Options\\\":\\\"true\\\",\\\"showOn\\\":\\\"\\\"}\",\"{\\\"id\\\":\\\"move1\\\",\\\"namex\\\":\\\"TZ6\\\",\\\"pressChange\\\":\\\"false\\\",\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"h-bh\\\",\\\"scale\\\":\\\"100\\\",\\\"opacity\\\":\\\"200\\\",\\\"type\\\":\\\"pressed\\\",\\\"commonevent\\\":\\\"0\\\",\\\"script\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"textHide\\\":\\\"false\\\",\\\"switch\\\":\\\"0\\\",\\\"switchScript\\\":\\\"\\\\\\\"!window['TZButtonVisible']\\\\\\\"\\\",\\\"button\\\":\\\"left+down\\\",\\\"showOnScene_Title\\\":\\\"true\\\",\\\"showOnScene_Map\\\":\\\"true\\\",\\\"showOnScene_Menu\\\":\\\"true\\\",\\\"showOnScene_Item\\\":\\\"true\\\",\\\"showOnScene_Skill\\\":\\\"true\\\",\\\"showOnScene_Equip\\\":\\\"true\\\",\\\"showOnScene_Save\\\":\\\"true\\\",\\\"showOnScene_Load\\\":\\\"true\\\",\\\"showOnScene_GameEnd\\\":\\\"true\\\",\\\"showOnScene_Shop\\\":\\\"true\\\",\\\"showOnScene_Name\\\":\\\"true\\\",\\\"showOnScene_Battle\\\":\\\"true\\\",\\\"showOnScene_Gameover\\\":\\\"true\\\",\\\"showOnScene_Options\\\":\\\"true\\\",\\\"showOn\\\":\\\"\\\"}\",\"{\\\"id\\\":\\\"move2\\\",\\\"namex\\\":\\\"TZ6\\\",\\\"pressChange\\\":\\\"false\\\",\\\"x\\\":\\\"bw\\\",\\\"y\\\":\\\"h-bh\\\",\\\"scale\\\":\\\"100\\\",\\\"opacity\\\":\\\"200\\\",\\\"type\\\":\\\"pressed\\\",\\\"commonevent\\\":\\\"0\\\",\\\"script\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"textHide\\\":\\\"false\\\",\\\"switch\\\":\\\"0\\\",\\\"switchScript\\\":\\\"\\\\\\\"!window['TZButtonVisible']\\\\\\\"\\\",\\\"button\\\":\\\"down\\\",\\\"showOnScene_Title\\\":\\\"true\\\",\\\"showOnScene_Map\\\":\\\"true\\\",\\\"showOnScene_Menu\\\":\\\"true\\\",\\\"showOnScene_Item\\\":\\\"true\\\",\\\"showOnScene_Skill\\\":\\\"true\\\",\\\"showOnScene_Equip\\\":\\\"true\\\",\\\"showOnScene_Save\\\":\\\"true\\\",\\\"showOnScene_Load\\\":\\\"true\\\",\\\"showOnScene_GameEnd\\\":\\\"true\\\",\\\"showOnScene_Shop\\\":\\\"true\\\",\\\"showOnScene_Name\\\":\\\"true\\\",\\\"showOnScene_Battle\\\":\\\"true\\\",\\\"showOnScene_Gameover\\\":\\\"true\\\",\\\"showOnScene_Options\\\":\\\"true\\\",\\\"showOn\\\":\\\"\\\"}\",\"{\\\"id\\\":\\\"move3\\\",\\\"namex\\\":\\\"TZ6\\\",\\\"pressChange\\\":\\\"false\\\",\\\"x\\\":\\\"bw*2\\\",\\\"y\\\":\\\"h-bh\\\",\\\"scale\\\":\\\"100\\\",\\\"opacity\\\":\\\"200\\\",\\\"type\\\":\\\"pressed\\\",\\\"commonevent\\\":\\\"0\\\",\\\"script\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"textHide\\\":\\\"false\\\",\\\"switch\\\":\\\"0\\\",\\\"switchScript\\\":\\\"\\\\\\\"!window['TZButtonVisible']\\\\\\\"\\\",\\\"button\\\":\\\"right+down\\\",\\\"showOnScene_Title\\\":\\\"true\\\",\\\"showOnScene_Map\\\":\\\"true\\\",\\\"showOnScene_Menu\\\":\\\"true\\\",\\\"showOnScene_Item\\\":\\\"true\\\",\\\"showOnScene_Skill\\\":\\\"true\\\",\\\"showOnScene_Equip\\\":\\\"true\\\",\\\"showOnScene_Save\\\":\\\"true\\\",\\\"showOnScene_Load\\\":\\\"true\\\",\\\"showOnScene_GameEnd\\\":\\\"true\\\",\\\"showOnScene_Shop\\\":\\\"true\\\",\\\"showOnScene_Name\\\":\\\"true\\\",\\\"showOnScene_Battle\\\":\\\"true\\\",\\\"showOnScene_Gameover\\\":\\\"true\\\",\\\"showOnScene_Options\\\":\\\"true\\\",\\\"showOn\\\":\\\"\\\"}\",\"{\\\"id\\\":\\\"shift\\\",\\\"namex\\\":\\\"TZ8\\\",\\\"pressChange\\\":\\\"false\\\",\\\"x\\\":\\\"w-bw*3\\\",\\\"y\\\":\\\"h-bh*2\\\",\\\"scale\\\":\\\"100\\\",\\\"opacity\\\":\\\"200\\\",\\\"type\\\":\\\"pressed\\\",\\\"commonevent\\\":\\\"0\\\",\\\"script\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"textHide\\\":\\\"false\\\",\\\"switch\\\":\\\"0\\\",\\\"switchScript\\\":\\\"\\\\\\\"!window['TZButtonVisible']\\\\\\\"\\\",\\\"button\\\":\\\"shift\\\",\\\"showOnScene_Title\\\":\\\"true\\\",\\\"showOnScene_Map\\\":\\\"true\\\",\\\"showOnScene_Menu\\\":\\\"true\\\",\\\"showOnScene_Item\\\":\\\"true\\\",\\\"showOnScene_Skill\\\":\\\"true\\\",\\\"showOnScene_Equip\\\":\\\"true\\\",\\\"showOnScene_Save\\\":\\\"true\\\",\\\"showOnScene_Load\\\":\\\"true\\\",\\\"showOnScene_GameEnd\\\":\\\"true\\\",\\\"showOnScene_Shop\\\":\\\"true\\\",\\\"showOnScene_Name\\\":\\\"true\\\",\\\"showOnScene_Battle\\\":\\\"true\\\",\\\"showOnScene_Gameover\\\":\\\"true\\\",\\\"showOnScene_Options\\\":\\\"true\\\",\\\"showOn\\\":\\\"\\\"}\",\"{\\\"id\\\":\\\"ok\\\",\\\"namex\\\":\\\"TZ9\\\",\\\"pressChange\\\":\\\"false\\\",\\\"x\\\":\\\"w-bw*2\\\",\\\"y\\\":\\\"h-bh\\\",\\\"scale\\\":\\\"100\\\",\\\"opacity\\\":\\\"200\\\",\\\"type\\\":\\\"pressed\\\",\\\"commonevent\\\":\\\"0\\\",\\\"script\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"textHide\\\":\\\"false\\\",\\\"switch\\\":\\\"0\\\",\\\"switchScript\\\":\\\"\\\\\\\"!window['TZButtonVisible']\\\\\\\"\\\",\\\"button\\\":\\\"ok\\\",\\\"showOnScene_Title\\\":\\\"true\\\",\\\"showOnScene_Map\\\":\\\"true\\\",\\\"showOnScene_Menu\\\":\\\"true\\\",\\\"showOnScene_Item\\\":\\\"true\\\",\\\"showOnScene_Skill\\\":\\\"true\\\",\\\"showOnScene_Equip\\\":\\\"true\\\",\\\"showOnScene_Save\\\":\\\"true\\\",\\\"showOnScene_Load\\\":\\\"true\\\",\\\"showOnScene_GameEnd\\\":\\\"true\\\",\\\"showOnScene_Shop\\\":\\\"true\\\",\\\"showOnScene_Name\\\":\\\"true\\\",\\\"showOnScene_Battle\\\":\\\"true\\\",\\\"showOnScene_Gameover\\\":\\\"true\\\",\\\"showOnScene_Options\\\":\\\"true\\\",\\\"showOn\\\":\\\"\\\"}\",\"{\\\"id\\\":\\\"cancel\\\",\\\"namex\\\":\\\"TZ10\\\",\\\"pressChange\\\":\\\"false\\\",\\\"x\\\":\\\"w-bw\\\",\\\"y\\\":\\\"h-bh*2\\\",\\\"scale\\\":\\\"100\\\",\\\"opacity\\\":\\\"200\\\",\\\"type\\\":\\\"pressed\\\",\\\"commonevent\\\":\\\"0\\\",\\\"script\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"textHide\\\":\\\"false\\\",\\\"switch\\\":\\\"0\\\",\\\"switchScript\\\":\\\"\\\\\\\"!window['TZButtonVisible']\\\\\\\"\\\",\\\"button\\\":\\\"escape\\\",\\\"showOnScene_Title\\\":\\\"true\\\",\\\"showOnScene_Map\\\":\\\"true\\\",\\\"showOnScene_Menu\\\":\\\"true\\\",\\\"showOnScene_Item\\\":\\\"true\\\",\\\"showOnScene_Skill\\\":\\\"true\\\",\\\"showOnScene_Equip\\\":\\\"true\\\",\\\"showOnScene_Save\\\":\\\"true\\\",\\\"showOnScene_Load\\\":\\\"true\\\",\\\"showOnScene_GameEnd\\\":\\\"true\\\",\\\"showOnScene_Shop\\\":\\\"true\\\",\\\"showOnScene_Name\\\":\\\"true\\\",\\\"showOnScene_Battle\\\":\\\"true\\\",\\\"showOnScene_Gameover\\\":\\\"true\\\",\\\"showOnScene_Options\\\":\\\"true\\\",\\\"showOn\\\":\\\"\\\"}\"]",
      "dirButton": "{\"id\":\"dir\",\"name\":\"DirPad\",\"namex\":\"BtnCir\",\"pressChange\":\"true\",\"straightDegree\":\"45\",\"x\":\"0\",\"y\":\"h-bh\",\"scale\":\"100\",\"opacity\":\"100\",\"type\":\"pressed\",\"commonevent\":\"0\",\"script\":\"\",\"textHide\":\"false\",\"switch\":\"0\",\"switchScript\":\"\\\"!window['TZButtonVisible']\\\"\",\"showOnScene_Title\":\"true\",\"showOnScene_Map\":\"true\",\"showOnScene_Menu\":\"true\",\"showOnScene_Item\":\"false\",\"showOnScene_Skill\":\"false\",\"showOnScene_Equip\":\"false\",\"showOnScene_Save\":\"false\",\"showOnScene_Load\":\"false\",\"showOnScene_GameEnd\":\"false\",\"showOnScene_Shop\":\"false\",\"showOnScene_Name\":\"false\",\"showOnScene_Battle\":\"false\",\"showOnScene_Gameover\":\"false\",\"showOnScene_Options\":\"false\",\"showOn\":\"\"}",
      "showOnPc": "true",
      "mobile": "100",
      "forBidTwo": "false",
      "forBidTwoWhenPress": "true",
      "forBidDestination": "false",
      "forBidButtonDes": "true",
      "option": "true",
      "remember": "true",
      "defaultSceneShow": "true",
      "specialMode": "true",
      "mod":"true"
    }

    var scripts = document.getElementsByTagName("script"), script = document.currentScript || scripts[scripts.length - 1]
    var url = script.src.split("?").slice(1).join("?");
    for (var k = url.split("&"), i = 0; i < k.length; i++){
      try {
          var p = k[i].split("=")
            , l = p.slice(0, 1)[0]
            , r = p.slice(1).join("=");
          if ("_base64" == l) {
              var obj1 = eval("(" + decodeURIComponent(escape(atob(r.replace(/\s+/g, "")))) + ")");
              for (var i in obj1)
                parameters[i] = obj1[i];
              break
          }
          l && (parameters[l] = decodeURIComponent(r))
      } catch (t) {}
    }
    var QJ =  {};
    QJ.B = {};
    //=============================================================================
    //
    //=============================================================================
    function NBDirButton() {
      this.initialize.apply(this, arguments);
    }
    function NBButton() {
      this.initialize.apply(this, arguments);
    }
    //=============================================================================
    //
    //=============================================================================
    var NBRealZoom = 1,
      NBButtonList = [];
    function setRealZoom(newZoom, type) {
      //0全部 1除方向 2方向
      if (newZoom >= 0) NBRealZoom = newZoom;
      if (type == 2) {
        for (var i in NBButtonList) {
          if (NBButtonList[i].DivX) {
            NBButtonList[i].refreshPosition();
            break;
          }
        }
      } else {
        for (var i in NBButtonList) {
          if (type == 1 && NBButtonList[i].DivX) continue;
          NBButtonList[i].refreshPosition();
        }
      }
      if (QJ.B.remember) $gameVariables._QJBRememberSize = NBRealZoom;
    };
    //=============================================================================
    //
    //=============================================================================
    QJ.B.lsBitmapRem = {};
    QJ.B.loadDetailData = function (detail) {
      detail.scale = Number(detail.scale);
      detail.commonevent = Number(detail.commonevent);
      detail.opacity = Number(detail.opacity);
      detail.switch = Number(detail.switch);
      detail.pressChange = detail.pressChange ? eval(detail.pressChange) : true;
      return detail;
    };
    var E = {
      "./img/button/BtnCir.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAB4CAYAAACuNZEIAAAACXBIWXMAAAsTAAALEwEAmpwYAAA8HmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDIxLTA4LTAyVDIwOjU3OjI1KzA4OjAwPC94bXA6Q3JlYXRlRGF0ZT4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjItMDQtMThUMTc6MDA6MjArMDg6MDA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDIyLTA0LTE4VDE3OjAwOjIwKzA4OjAwPC94bXA6TWV0YWRhdGFEYXRlPgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOmIxZGMzNjFlLWQyYWYtMmU0MC05NGU1LTkyOTJlODY2YWI2MTwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDpBREM2RjZFRkIzRTUxMUU2QkQ0QUNFQzY5MjNCRUZDMTwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkRlcml2ZWRGcm9tIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgPHN0UmVmOmluc3RhbmNlSUQ+eG1wLmlpZDpBREM2RjZFQ0IzRTUxMUU2QkQ0QUNFQzY5MjNCRUZDMTwvc3RSZWY6aW5zdGFuY2VJRD4KICAgICAgICAgICAgPHN0UmVmOmRvY3VtZW50SUQ+eG1wLmRpZDpBREM2RjZFREIzRTUxMUU2QkQ0QUNFQzY5MjNCRUZDMTwvc3RSZWY6ZG9jdW1lbnRJRD4KICAgICAgICAgPC94bXBNTTpEZXJpdmVkRnJvbT4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOkFEQzZGNkVGQjNFNTExRTZCRDRBQ0VDNjkyM0JFRkMxPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDpkNTgzMTkwMC05MGU3LTlkNGMtYjNlZC04ZjVjMDQ4NjgwY2E8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMjEtMDgtMDJUMjA6NTg6MDcrMDg6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6YjFkYzM2MWUtZDJhZi0yZTQwLTk0ZTUtOTI5MmU4NjZhYjYxPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDIyLTA0LTE4VDE3OjAwOjIwKzA4OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4KICAgICAgICAgICAgPHJkZjpCYWc+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpBREM2RjZFRkIzRTUxMUU2QkQ0QUNFQzY5MjNCRUZDMTwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpCYWc+CiAgICAgICAgIDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+NjA8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MTIwPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg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",
      "./img/button/DirPad.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAYAAAA9zQYyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAABIe2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDIwLTA5LTEwVDE2OjI5OjE2KzA4OjAwPC94bXA6Q3JlYXRlRGF0ZT4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjItMDQtMThUMTc6MDQ6NTgrMDg6MDA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDIyLTA0LTE4VDE3OjA0OjU4KzA4OjAwPC94bXA6TWV0YWRhdGFEYXRlPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8cGhvdG9zaG9wOkNvbG9yTW9kZT4zPC9waG90b3Nob3A6Q29sb3JNb2RlPgogICAgICAgICA8cGhvdG9zaG9wOklDQ1Byb2ZpbGU+c1JHQiBJRUM2MTk2Ni0yLjE8L3Bob3Rvc2hvcDpJQ0NQcm9maWxlPgogICAgICAgICA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPgogICAgICAgICAgICA8cmRmOkJhZz4KICAgICAgICAgICAgICAgPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6NGNiMzk1NjgtZGVlOS0xMWViLWIxMmEtZTJhMDk0YjJjZDAxPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjkxODc5MjAxLWIzZmYtMmQ0ZS04Njc4LTk4MjY1NDQ1OGQ5YzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDphYjE0ZTg3ZS1kZWU0LTExZWItYWZiMC05ZmVhNjViYzgxMTI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjA0Y2MxYzVkLWQ2NTgtNmU0ZS1iNDhhLWU0NWJlMDdmNDk5ZTwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpCYWc+CiAgICAgICAgIDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjFlOWJmZmRiLWRlMzEtZjY0Ni05MDMxLTE0YmQ2N2E3MzgxNzwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjA5YmQ4OTU4LWYzOTEtMTFlYi05YWFkLTk0NDU4YTc2ZDRjNTwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjA0Y2MxYzVkLWQ2NTgtNmU0ZS1iNDhhLWU0NWJlMDdmNDk5ZTwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDowNGNjMWM1ZC1kNjU4LTZlNGUtYjQ4YS1lNDViZTA3ZjQ5OWU8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMjAtMDktMTBUMTY6Mjk6MTYrMDg6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6Y2E3YWM5ZDQtZGVmNC0yMjQ0LTkwZTEtYmNjMDdkNTJiMGU1PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDIxLTA4LTAyVDIwOjU2OjIxKzA4OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jb252ZXJ0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+ZnJvbSBpbWFnZS9wbmcgdG8gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcDwvc3RFdnQ6cGFyYW1ldGVycz4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmRlcml2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+Y29udmVydGVkIGZyb20gaW1hZ2UvcG5nIHRvIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3A8L3N0RXZ0OnBhcmFtZXRlcnM+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjBiNzU5YmM0LWQxMjMtNGU0Ni04MjU0LTliNzQ2MzY3NzBkNjwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAyMS0wOC0wMlQyMDo1NjoyMSswODowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDo5ZWY0ZGYwYy1jZGI4LWE0NDgtYWNkOC04YzIyZjE1YmZhZDk8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMjEtMDgtMDJUMjA6NTY6MzArMDg6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNvbnZlcnRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6cGFyYW1ldGVycz5mcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nPC9zdEV2dDpwYXJhbWV0ZXJzPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+ZGVyaXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6cGFyYW1ldGVycz5jb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZzwvc3RFdnQ6cGFyYW1ldGVycz4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6M2JkNzVmMWQtOWYxYS04YTQ2LTg4ODQtODFiNzhjMjgzMDEyPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDIxLTA4LTAyVDIwOjU2OjMwKzA4OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjFlOWJmZmRiLWRlMzEtZjY0Ni05MDMxLTE0YmQ2N2E3MzgxNzwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAyMi0wNC0xOFQxNzowNDo1OCswODowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6U2VxPgogICAgICAgICA8L3htcE1NOkhpc3Rvcnk+CiAgICAgICAgIDx4bXBNTTpEZXJpdmVkRnJvbSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgIDxzdFJlZjppbnN0YW5jZUlEPnhtcC5paWQ6OWVmNGRmMGMtY2RiOC1hNDQ4LWFjZDgtOGMyMmYxNWJmYWQ5PC9zdFJlZjppbnN0YW5jZUlEPgogICAgICAgICAgICA8c3RSZWY6ZG9jdW1lbnRJRD54bXAuZGlkOjBiNzU5YmM0LWQxMjMtNGU0Ni04MjU0LTliNzQ2MzY3NzBkNjwvc3RSZWY6ZG9jdW1lbnRJRD4KICAgICAgICAgICAgPHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjA0Y2MxYzVkLWQ2NTgtNmU0ZS1iNDhhLWU0NWJlMDdmNDk5ZTwvc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8L3htcE1NOkRlcml2ZWRGcm9tPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xODA8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MTgwPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz5gi+s4AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAFrSURBVHja7NJBDQAACMQwwL/nwwNP0kpY1kkKvhgJMDQYGgwNhsbQYGgwNBgaDI2hwdBgaDA0GBpDg6HB0GBoMDSGBkODocHQYGgMDYYGQ4OhwdAYGgwNhgZDg6ExNBgaDA2GxtBgaDA0GBoMjaHB0GBoMDQYGkODocHQYGgwNIYGQ4OhwdBgaAwNhgZDg6HB0BgaDA2GBkODoTE0GBoMDYYGQ2NoMDQYGgyNocHQYGgwNBgaQ4OhwdBgaDA0hgZDg6HB0GBoDA2GBkODocHQGBoMDYYGQ4OhMTQYGgwNhgZDY2gwNBgaDI2hwdBgaDA0GBpDg6HB0GBoMDSGBkODocHQYGgMDYYGQ4OhwdAYGgwNhgZDg6ExNBgaDA2GBkNjaDA0GBoMDYbG0GBoMDQYGkODocHQYGgwNIYGQ4OhwdBgaAwNhgZDg6HB0BgaDA2GBkODoTE0GBoMDYYGQ2NoMDQYGu4WAAD//wMAwW0EZfcZckAAAAAASUVORK5CYII=",
      "./img/button/TZ1.png":"data:image/png;base64,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",
      "./img/button/TZ6.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANKSURBVGhD7ZvNSxtBGIfX1sTvSpoQq2mlHx7SFjUtlaLFtmmlpRWtxZgmurvpyUvAiyDq0aP4ByhePCl6ETx4zSEJiiAIHgQxwXhK8AMCIigh9vcmoxaT0uBpM84LD+8mO7vZJ/POTA4TKZc4Pz8vALpkMlmCXKpBikEhe9ybB26ih+Q9YMGxFdhw/FqDNIA6YAZleM67TCG3oAtwYQXyU+RW5C5kF+gDsgbpBU7QDt6AakDVWMCU/h1oRKVrBG8B3UQFFzd1axR6NuoMhdEBD6rIcnCHqWUGThaiMcnaAYnSTbJ9gNYhacqNgEo8U5rexMkK8AF4gJZ7NBeos4jncNODq/KmF4BKmQY/9Wy+y14gw6sHuQr5aiJjwgac6KZGrDEXwOs3Mk28OvJkypKEN+sBlXLWC/MYKutfwMhUUz1My9BXcDHYuYL18gumK0mxWKw8kUhQrefrrPw/PGdnZ61MV5JWVlaqTk9PSZaXyeo6Sjwe/wbV9PK0vLz88Pj4mMtyZsjRaLQTqrqU8OLi4iN8A1wLRyIREtYLYU4RwkKYM4SwEOYMISyEOUMIC2HOEMJCmDOEsBDmDCEshDlDCAthzhDCQpgzhLAQ5oxbLrywsFB7S4SLUsJTU1O1sViMW+FEIiFvbW1dCY+Ojlp2dnZoBw+Xu3hOTk6UtbU12sWTFrZarcZgMOhgW5eyXpTPHBwcqHNzcx+hmt7FgyibmZn5sr+/z2VZb25uqgMDAw3wvNxGrHM6nY2rq6vcCR8dHcnz8/MOk8lUDc/LzaV0YB4fH/8RDoe5kvb7/arH43kHv9KU6V9RVI+Ynp7ujUajXIzljY0NZXh4mGZnC8j6V4DK5ubmlsnJSXl3dzdvpbEMuWl4QrbHaDRa4ZWenbMElbbJZrO1jI2NuXw+n3J4eJhXSxV1FMas0t/f32UwGF7CJ6OUrwdJG8xmc4PL5WqfmJhwLy0tKevr63IoFOrb29vTHNvb232BQECenZ2VR0ZGnHa7/RMcnoESEso1qLGlpqbmVVtb22dVVTsxtXcPDQ05tMTg4KDD6/X+xCrzvamp6b1er6eN4CZwo3+qUW8Xg/uABv4TQN9cnYag53kMHoBKcPnjIjMk6Q/dcWF0GHBCkgAAAABJRU5ErkJggg==",
      "./img/button/TZ8.png":"data:image/png;base64,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",
      "./img/button/TZ9.png":"data:image/png;base64,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",
      "./img/button/TZ10.png":"data:image/png;base64,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",
      "./img/button/TZ7Q.png":"data:image/png;base64,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",
      "./img/button/TZ7E.png":"data:image/png;base64,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",
      "./img/button/TZ4.png":"data:image/png;base64,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",
      "./img/button/TZ5.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAeCAYAAADnydqVAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAlFSURBVGhD7VprSFVZFO4xaaZN2UyWDs2U09TYY2awgUh7zYwNjJqW2tNMS8VHdZ2yEWxilGmcpgkiCCyoH1M/hPJHD8IIiuhBBmVBENQPkyiIIPJHBoU95vvO3eu0PJ571fL2oLvgY++z9j777LO+tdbe+9zbpyfy4sWLvs+fPw8HYoDxwGTovgsicICNvwEmoB6LchjK/oaO3hEM2A8DfwyMQ302yoVPnz4tBtah/hvKiiACjvXAGiAPNk8FD1NQRqMMMTS9mmCAQRhofHt7exoGL3v27Nkm6P5BuRn4C/Vq6KuCCBxg52rgT6AGoO3/hv53YAW4SWxraxsJHj4ylHVPcANTcRQwEwOVmgdsQp0RWwR9DrAIyAIygggoMgHaeQmwAvb3ABtJOMoNwALo44AwQ59/Abn90fkzIAUgofSkMtSXAmlGnxzEG8UvgNh9LkDS88FLJfAH6iuBeHAXYWh0F3TgehsNcMD1QAXAaOWgHJwPSTWgLog3C7G9cMHIXgVsAPLBHzdlviMZHSLRYYa5yQMsBMSLgqS+WyAfJJlZlRFcDiwGxoLHAYbSlwLlQDQyly8DVgNCbpDYdxuaZAbmHCAKfPY11NqbquGmsRjIBiQdOwe8h/4dBLrbwFVgN8D1wXnPuwB/864HmObc7nsfkILXmYeyAOCSOhF4marRGALFlwCjNhegR/iK3E6G0sJ2gKnC7d63Cb/zpqBPI5Cv7nlfIOma/DGSZ+J1IgFvFKPC8248kI06t93s7DYQYRsKdXr9v8AZoM2oqWdEuN37NqHnXWdwGLht1Jbg+jrgdv+7DpKcDnCJZZ0fQvoJwRFQcHPFs9Z808FtEEIbSuvrjNqfkegQ3J27tTnBvj3JBMsBf2nW17yJvabJEl472jVKAD7nTS9F3bUHo5jn5zF4FS/Bra2tQ9vb23/CmYqN/tIz4ctQZUZNPdO06GuBDlFCgY5R7jQSX+CM6WIJrk8AV80lr50plA5jz4mC6yaAhOt+/ggmGkwz250OynnWm2ZboOMarp1qg2liG+cteh5hLEG9WemXGzX1zCjU6UDZDhw2l5bw2vTzBc6ViEN3L8EtLS0jQTDPvt3xyu5EMNcy0VvkoOSLcUPzxOoEQZ2bMj3GddPkU9BHE1xl1NQ/AZrNpTxPv09XBJeYZra3Odrscd0E7VWqr7VU8R6l2251NIJricQao6KOH5Oo03bs4LgivM/07QQ0c7OV2dbWFn/p0iXvcen48eNjEMVsYGj7i15CG4rey4c1AHoNpudJf5KoSaHRH5h+2gj6ZZkBeA8NYb8wxejZn20yzgNAItY2JurMHjJ+VwTTOLbgWsbbbVTUMbL5zmyz0zrqfL44k52BUBciG8215dwohSArK6DUGU8TzHHpPHyeHldnByfSHz9+nHXr1q3p+/fv9+6k9+zZM765uTkLUdwjgt0E7b42WEyl3JAxFVkpG6WOFJ0inR5qEUlBXQjW0csXpuEthzNq6ul4MkZXBC82zWxnNhC9nVVQ1+mY0BlDIlA7mEQ235NjSjaTNCvXmjBNsJ6/Tv9cgkTvRNrDhw8XXLhw4cetW7eGWwTX1NR8feXKlQVgnl7YY4Kho2czLTsNQDCa7bTsFNWvyaio0xFPnDBNus2OLF+CPlwSZIyuCNYG1JlFUi4Jci5h9vqIOp2XOue6au1NUHIuFnkoZY2XsbVDa4J1JtTruH4vDXKXdvfu3UVHjx5NKi8v9xKcl5f31alTp7LIvOnkj+QuU52CjjK+FI3ASNaESV8dKRINArdNlk6dPKbJ0UdDG6ireevn68jR2UNSrsBKvRTUtXNbkY2SkWbNEyV35pYToaSzrFd1Pe7rEpx+48aNJbt27fphypQpgyyCExMTP9+7d2/GnTt3+KDeJFinXR2V2mhufUmO6O2IoODaLUXrTZ0v+Jo331k7HNc9bXBNvHPpsCKQgrretcvaytRsZSaUdFpmAFmHrehH6STrtQhGFs44d+7csoqKigRQG2oRPG7cuE83btyYjLzNSfKwHAiCLQ8GbGNSTD9Cr530aq5TfEH7eRRcC8E0lp4L+3PN4zO4D2BUy9iE7ksDEZ12x9DpHTHxr2liG8nn2JyXXn+dz9LpniTrvYasu5KenSeJ1yKY6bmurm5Zenr6ZFBr/70nLDU1dRqieCU7sKPjRo2eEGy/qAh0fFlfY9ipWIR9AfscjbrOBCTDdX2HXu9MiQ6O4hS0cwnhRwx9j6DDWVQL2nifjl6Czqej23UTRcG185mvSnAqNsnpjY2NeZWVlVkxMTGjDLeW9B0xYsQYj8ezGEemfIQ5j0y+PlfSWyUC3Nqd4CTZl97Pe5mqGG1uY9AwbKPRSBANQ0L1GuxcB2kgpmiJDI7J5zjTqZ63gM+SzKL7uoHOxHu4AePcWNfHMCcY6fIcPRfuQUTvtrSIvQidTehEoue89T3WstrS0rJk586dRbNnz54FTjv9+B8eHx8/o7q6uuTy5cv8wUFu1AO9DZBQSWd0Erc+HzpSWltbM+vr64uXQoYMGTIGfL78uVBJdFJSUgbOT55r167JR2t/Pzz0NuiZOt05o1dvvoIw/Dx69Gj+oUOHiosgsbGx34PHgV46O0v/kJCQ8cnJyTmbN29ee/HiRYlkX78N9yoMj66CdqZt5zn0Q4UEXsq9e/eyDhw4UFpYWFgWFxeXBA6Heqn0LaGRkZGTZs2albMecvDgwSJsvOR8bA1q6oGA248STM//oZSvbB8ybNtjn5Te1NSUs2PHjl+RlT2jR4/+GdxFeSnsWkJCQ0PHTpw4MSM7O7ts27Zta48dO1Zw8+bNRUgH8/g/afXQ3gb/UVJp4Nb+QQI2n0u7379/P5PH2X379q0qh2BJLYyOjp4Ozj7xUtd94U9NI4cPH56YkJCwLDc311NVVbWutrbWg5RQ1NDQkH/69Oncs2fP5p4/f355EIEBbXzy5MkVR44cKSCpW7ZsWVtWVrYuLS2tGAE4NyIiYgJ48n6SfEXh564voqKipk2aNGketuC5mZmZxXl5eauxpq8uKSlZU1paujqIwID2LSgoWJOTk1OakpJSOHXq1MWjRo2aEx4ezg8ZjFrvb769IPxtcRgQO2DAgG8HDx48Fd6TCMwIIqCYDlsnhIWFcXccB8QA3m/MXUqfPv8DhuSohKh5A/cAAAAASUVORK5CYII="
    }
    function D(x){
      return parameters.mod ? E[x] || x : x;
    }
    function getName(data, x) {
      return D("./img/button/" + (x ? data.name : data.namex) + ".png");
    };
    function loadImage(data, x) {
      var img = new Image();
      img.src = getName(data, x);
      img.onload = function () {
        if (x) {
          data.width = img.width;
          data.height = img.height;
        } else {
          data.widthx = img.width;
          data.heightx = img.height;
        }
      };
      return img;
    };

    var specialMode = eval(parameters['specialMode']) || false;
    var button = eval(parameters['button']) || [];
    var dirButton = specialMode ? JsonEx.parse(parameters['dirButton']) : QJ.B.loadDetailData(JsonEx.parse(parameters['dirButton']));
    var d = [];
    var showOnPC = eval(parameters['showOnPc']);
    var NBShow = Utils.isMobileDevice() || showOnPC;
    QJ.B.remember = eval(parameters['remember']);
    var option = eval(parameters['option']);
    var defaultSceneShow = eval(parameters['defaultSceneShow']);
    var forBidTwo = eval(parameters['forBidTwo']);
    var forBidDestination = eval(parameters['forBidDestination']);
    var forBidButtonDes = eval(parameters['forBidButtonDes']) || true;
    var forBidTwoWhenPress = eval(parameters['forBidTwoWhenPress']) || true;
    if (specialMode) {
      (function () {
        d.push(dirButton);
        for (var data in button) d.push(JsonEx.parse(button[data]));
        for (var data in d) {
          data = QJ.B.loadDetailData(d[data]);
          if (data.name) loadImage(data, true);
          if (data.namex) loadImage(data, false);
        }
      })();
    }
    var forBidButtonDesTemp = false;
    NBRealZoom = parameters['mobile'] / 100;
    //window.innerWidth<window.innerHeight?1:1;
    //=============================================================================
    //
    //=============================================================================
    var isMZ = Utils.RPGMAKER_NAME == 'MZ';
    //=============================================================================
    //
    //=============================================================================
    QJ.B.setTwo = function (bo) {
      return forBidTwo = !bo;
    };
    QJ.B.setMove = function (bo) {
      return forBidDestination = !bo;
    };
    QJ.B.setButton = function (id, scale, x, y, opacity) {
      var data = null;
      for (var i in NBButtonList) {
        if (NBButtonList[i].Data.id == id) {
          data = NBButtonList[i];
          break;
        }
      }
      if (!data) {
        console.warn("未找到id为" + id + "的按钮。");
        return;
      }
      data.resetData(scale, x, y, opacity);
    };
    //=============================================================================
    //
    //=============================================================================
    TouchInput._onCancel = function (x, y) {
      if (!forBidTwo) {
        if (isMZ) {
          if (forBidTwoWhenPress && !forBidButtonDesTemp) {
            this._newState.cancelled = true;
          }
        } else {
          if (forBidTwoWhenPress && !forBidButtonDesTemp) {
            this._events.cancelled = true;
          }
        }
      }
      this._x = x;
      this._y = y;
    };
    var B_Game_Variables_initialize = Game_Variables.prototype.initialize;
    Game_Variables.prototype.initialize = function () {
      B_Game_Variables_initialize.call(this);
      this.initializeButton();
    };
    Game_Variables.prototype.initializeButton = function () {
      this._buttonData = {};
    };
    Game_Variables.prototype.button = function (id) {
      if (!this._buttonData) this.initializeButton();
      return this._buttonData[id] || {};
    };
    Game_Variables.prototype.setButton = function (id, data) {
      if (!this._buttonData) this.initializeButton();
      this._buttonData[id] = data;
    };
    var QJB_Game_Temp_setDestination = Game_Temp.prototype.setDestination;
    Game_Temp.prototype.setDestination = function (x, y) {
      if (forBidDestination || forBidButtonDes && forBidButtonDesTemp) {
        return;
      }
      QJB_Game_Temp_setDestination.call(this, x, y);
    };
    var NB_Window_Options_addVolumeOptions = Window_Options.prototype.addVolumeOptions;
    Window_Options.prototype.addVolumeOptions = function () {
      if (option) this.addCommand("按钮[退出后修改方向键]", 'NBButtonSize');
      NB_Window_Options_addVolumeOptions.call(this);
    };
    var NB_Window_Options_isVolumeSymbol = Window_Options.prototype.isVolumeSymbol;
    Window_Options.prototype.isVolumeSymbol = function (symbol) {
      return NB_Window_Options_isVolumeSymbol.call(this, symbol) || symbol == "NBButtonSize";
    };
    var NB_Window_Options_cursorRight = Window_Options.prototype.cursorRight;
    Window_Options.prototype.cursorRight = function (wrap) {
      var index = this.index();
      var symbol = this.commandSymbol(index);
      if (symbol == "NBButtonSize") {
        var value = this.getConfigValue(symbol);
        value += 10;
        value = value.clamp(0, 200);
        this.changeValue(symbol, value);
      } else NB_Window_Options_cursorRight.call(this, wrap);
    };
    var NB_Window_Options_cursorLeft = Window_Options.prototype.cursorLeft;
    Window_Options.prototype.cursorLeft = function (wrap) {
      var index = this.index();
      var symbol = this.commandSymbol(index);
      if (symbol == "NBButtonSize") {
        var value = this.getConfigValue(symbol);
        value -= 10;
        value = value.clamp(0, 200);
        this.changeValue(symbol, value);
      } else NB_Window_Options_cursorLeft.call(this, wrap);
    };
    var NB_Window_Options_processOk = Window_Options.prototype.processOk;
    Window_Options.prototype.processOk = function () {
      var index = this.index();
      var symbol = this.commandSymbol(index);
      if (symbol == "NBButtonSize") {
        var value = this.getConfigValue(symbol);
        value += 1;
        value = value.clamp(0, 200);
        this.changeValue(symbol, value);
      } else NB_Window_Options_processOk.call(this);
    };
    var NB_Window_Options_changeValue = Window_Options.prototype.changeValue;
    Window_Options.prototype.changeValue = function (symbol, value) {
      if (symbol == "NBButtonSize") {
        setRealZoom(value / 100, 1);
        this.refresh();
      } else NB_Window_Options_changeValue.call(this, symbol, value);
    };
    var NB_Window_Options_getConfigValue = Window_Options.prototype.getConfigValue;
    Window_Options.prototype.getConfigValue = function (symbol) {
      if (symbol == "NBButtonSize") return Math.floor(NBRealZoom * 100); else return NB_Window_Options_getConfigValue.call(this, symbol);
    };
    var NB_Scene_Options_popScene = Scene_Options.prototype.popScene;
    Scene_Options.prototype.popScene = function () {
      setRealZoom(-1, 0);
      NB_Scene_Options_popScene.call(this);
    };
    //=============================================================================
    //
    //=============================================================================
    if (!isMZ) {
      var NB_Scene_Boot_loadSystemImages = Scene_Boot.loadSystemImages;
      Scene_Boot.loadSystemImages = function () {
        NB_Scene_Boot_loadSystemImages.call(this);
        if (!specialMode) {
          var detail;
          d.push(dirButton);
          for (var data in button) {
            d.push(QJ.B.loadDetailData(JsonEx.parse(button[data])));
          }
          for (var i in d) {
            i = d[i];
            if (i.namex && typeof i.namex == 'string' && i.namex.length > 0) {
              QJ.B.lsBitmapRem[i.namex] = ImageManager.loadButtonImage(i.namex);
            }
            if (i.name && typeof i.name == 'string' && i.name.length > 0) {
              QJ.B.lsBitmapRem[i.name] = ImageManager.loadButtonImage(i.name);
            }
          }
        }
      };
    }
    var NB_DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
    DataManager.isDatabaseLoaded = function () {
      if (!NB_DataManager_isDatabaseLoaded.call(this, arguments)) return false;
      if (!specialMode) {
        for (var i in QJ.B.lsBitmapRem) {
          if (!QJ.B.lsBitmapRem[i].isReady()) return false;
        }
      }
      if (isMZ) {
        if (!specialMode) {
          var detail;
          d.push(dirButton);
          for (var data in button) {
            d.push(QJ.B.loadDetailData(JsonEx.parse(button[data])));
          }
          for (var _i in d) {
            _i = d[_i];
            if (_i.namex && typeof _i.namex == 'string' && _i.namex.length > 0) {
              QJ.B.lsBitmapRem[_i.namex] = ImageManager.loadButtonImage(_i.namex);
            }
            if (_i.name && typeof _i.name == 'string' && _i.name.length > 0) {
              QJ.B.lsBitmapRem[_i.name] = ImageManager.loadButtonImage(_i.name);
            }
          }
        }
      }
      return true;
    };
    var hasShowOnOpen = true;
    var NB_DataManager_setupNewGame = DataManager.setupNewGame;
    function show(){
      if (hasShowOnOpen) {
        hasShowOnOpen = false;
        if (!NBShow) return;
        document.getElementById(isMZ ? "errorPrinter" : "ErrorPrinter").style["pointer-events"] = "none";
        for (var i = 1; i < d.length; i++) NBButtonList.push(new NBButton(d[i]));
        document.documentElement.style["-webkit-user-select"] = "none";
        NBButtonList.push(new NBDirButton(d[0]));
        document.addEventListener("touchmove", function (evt) {
          evt.preventDefault();
        }, {passive:false});
      }
    }
    DataManager.setupNewGame = function () {
      NB_DataManager_setupNewGame.call(this, arguments);
      show();
    };
    //=============================================================================
    //
    //=============================================================================
    ImageManager.loadButtonImage = function (filename, hue) {
      return this.loadBitmap('img/button/', filename, hue, true);
    };
    function loadDiv(data, x) {
      var newDiv = document.createElement("div"),
        url,
        bitmap;
      if (!specialMode) {
        bitmap = QJ.B.lsBitmapRem[x ? data.name : data.namex];
        url = bitmap.canvas.toDataURL('image/png');
        if (x) {
          data.width = bitmap.baseTexture.width;
          data.height = bitmap.baseTexture.height;
        } else {
          data.widthx = bitmap.baseTexture.width;
          data.heightx = bitmap.baseTexture.height;
        }
      }
      newDiv.id = "NBButton" + data.id + (x ? "" : "o");
      newDiv.style.position = "fixed";
      var buttonw = Math.floor((x ? data.width : data.widthx) * data.scale / 100 * NBRealZoom),
        buttonh;
      if (data.pressChange) {
        buttonh = Math.floor((x ? data.height : data.heightx / 2) * data.scale / 100 * NBRealZoom);
      } else {
        buttonh = Math.floor((x ? data.height : data.heightx) * data.scale / 100 * NBRealZoom);
      }
      newDiv.style.width = buttonw + "px";
      newDiv.style.height = buttonh + "px";
      newDiv.style.top = dealTextContent(data.y, x, data, buttonw, buttonh) + "px";
      newDiv.style.left = dealTextContent(data.x, x, data, buttonw, buttonh) + "px";
      newDiv.style.opacity = data.opacity / 255;
      newDiv.style.zIndex = "11";
      newDiv.style.userSelect = "none";
      newDiv.style["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)";
      newDiv.style["background-image"] = 'url(' + (specialMode ? getName(data, x) : url) + ')';
      newDiv.style["background-repeat"] = "no-repeat";
      if (data.pressChange) {
        newDiv.style["background-size"] = buttonw + "px " + (x ? buttonh : buttonh * 2) + "px";
      } else {
        newDiv.style["background-size"] = buttonw + "px " + buttonh + "px";
      }
      newDiv.style["background-position"] = "-0px -" + 0 + "px";
      document.body.appendChild(newDiv);
      return newDiv;
    };
    function canJudge() {
      return !SceneManager.isSceneChanging();
    };
    dealTextContent = function dealTextContent(content, x, data, w, h) {
      content = String(content);
      content = content.replace(/bw/ig, w);
      content = content.replace(/bh/ig, h);
      content = content.replace(/sw/ig, Graphics.width);
      content = content.replace(/sh/ig, Graphics.height);
      content = content.replace(/w/ig, window.innerWidth);
      content = content.replace(/h/ig, window.innerHeight);
      content = content.replace(/sx/ig, (window.innerWidth - Graphics.width) / 2);
      content = content.replace(/sy/ig, (window.innerHeight - Graphics.height) / 2);
      return eval(content);
    };
    //=============================================================================
    //
    //=============================================================================
    NBDirButton.prototype.initialize = function (data) {
      var _this = this;
      this.Data = data;
      this.Data.textHide = this.Data.textHide ? eval(this.Data.textHide) : false;
      if (!!data.showOn) {
        var moreScene = data.showOn.split("|");
        for (var i in moreScene) this.Data["showOn" + moreScene[i]] = true;
      }
      this.Div = loadDiv(data, true);
      this.DivX = loadDiv(data, false);
      this.straightDegree = Number(data.straightDegree) * Math.PI / 180;
      this.Press = false;
      this.PressAnim = false;
      this.show = null;
      this.refreshData();
      this.clearInput();
      var pointer = this;
      if (!Utils.isMobileDevice() && showOnPC) {
        this.Div.addEventListener('mousedown', function (e) {
          forBidButtonDesTemp = true;
          var xx = e.clientX,
            yy = e.clientY;
          var lx = xx - _this.x - _this.width / 2,
            ly = yy - _this.y - _this.height / 2,
            ld = (_this.height + _this.width) / 4;
          if (lx * lx + ly * ly > ld * ld) return;
          if (canJudge()) {
            pointer.setInput(xx, yy);
            pointer.Press = true;
          }
          ;
          if (_this.Data.type == "pressed") _this.runData();
        }, false);
        this.DivX.addEventListener('mousedown', function (e) {
          if (canJudge()) {
            pointer.setInput(e.clientX, e.clientY);
            pointer.Press = true;
          }
          ;
          if (_this.Data.type == "pressed") _this.runData();
        }, false);
        this.DivX.addEventListener('mousemove', function (e) {
          if (pointer.Press && canJudge()) pointer.setInput(e.clientX, e.clientY);
        }, false);
        this.DivX.addEventListener('mouseup', function () {
          pointer.clearInput();
          pointer.Press = false;
          if (_this.Data.type == "triggered") _this.runData();
        }, false);
        this.DivX.addEventListener('mouseout', function () {
          pointer.clearInput();
          pointer.Press = false;
        }, false);
      }
      this.Div.addEventListener('touchstart', function (e) {
        forBidButtonDesTemp = true;
        var xx = e.targetTouches[0].clientX,
          yy = e.targetTouches[0].clientY;
        var lx = xx - _this.x - _this.width / 2,
          ly = yy - _this.y - _this.height / 2,
          ld = (_this.height + _this.width) / 4;
        if (lx * lx + ly * ly > ld * ld) return;
        if (canJudge()) {
          pointer.setInput(xx, yy);
          pointer.Press = true;
        }
        ;
        if (_this.Data.type == "pressed") _this.runData();
      }, false);
      this.Div.addEventListener('touchend', function (e) {
        pointer.clearInput();
        pointer.Press = false;
        if (_this.Data.type == "triggered") _this.runData();
      }, false);
      this.Div.addEventListener('touchmove', function (e) {
        if (pointer.Press && canJudge()) {
          pointer.setInput(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
        }
        ;
      }, false);
      this.DivX.addEventListener('touchstart', function (e) {
        forBidButtonDesTemp = true;
        if (canJudge()) {
          pointer.setInput(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
          pointer.Press = true;
        }
        ;
        if (_this.Data.type == "pressed") _this.runData();
      }, false);
      this.DivX.addEventListener('touchmove', function (e) {
        if (pointer.Press && canJudge()) {
          pointer.setInput(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
        }
        ;
      }, false);
      this.DivX.addEventListener('touchend', function () {
        pointer.clearInput();
        pointer.Press = false;
        if (_this.Data.type == "triggered") _this.runData();
      }, false);
    };
    NBDirButton.prototype.refreshData = function () {
      this.x = Number(this.Div.style.left.substr(0, this.Div.style.left.length - 2));
      this.y = Number(this.Div.style.top.substr(0, this.Div.style.top.length - 2));
      this.xx = Number(this.DivX.style.left.substr(0, this.DivX.style.left.length - 2));
      this.yx = Number(this.DivX.style.top.substr(0, this.DivX.style.top.length - 2));
      this.width = Number(this.Div.style.width.substr(0, this.Div.style.width.length - 2));
      this.height = Number(this.Div.style.height.substr(0, this.Div.style.height.length - 2));
      this.widthx = Number(this.DivX.style.width.substr(0, this.DivX.style.width.length - 2));
      this.heightx = Number(this.DivX.style.width.substr(0, this.DivX.style.width.length - 2));
      var remData = $gameVariables.button(this.Data.id) || {};
      remData["scale"] = this.Data.scale;
      remData["x"] = this.Data.x;
      remData["y"] = this.Data.y;
      remData["opacity"] = this.Data.opacity;
      $gameVariables.setButton(this.Data.id, remData);
    };
    NBDirButton.prototype.loadRemember = function () {
      var data = $gameVariables.button(this.Data.id) || {};
      if (!data || Object.keys(data).length == 0) return;
      this.Data.x = data.x;
      this.Data.y = data.y;
      this.Data.opacity = data.opacity;
      this.Data.scale = data.scale;
      this.refreshPosition();
    };
    NBDirButton.prototype.runData = function () {
      if (this.Data.commonevent > 0) $gameTemp.reserveCommonEvent(this.Data.commonevent);
      if (this.Data.script.length > 0) eval(eval(this.Data.script));
    };
    NBDirButton.prototype.update = function () {
      if (this.Press != this.PressAnim) this.updateShow();
      if (this.judge() != this.show) {
        this.show = this.judge();
        if (this.show) {
          this.DivX.style.display = "block";
          this.Div.style.display = "block";
        } else {
          this.DivX.style.display = "none";
          this.Div.style.display = "none";
        }
        this.Press = false;
        this.updateShow();
      }
      //console.log(Input._currentState['up'],Input._currentState['down'],Input._currentState['left'],Input._currentState['right']);
    };
  
    NBDirButton.prototype.updateShow = function () {
      this.PressAnim = this.Press;
      if (this.Press && this.Data.pressChange) this.DivX.style["background-position"] = "-0px -" + this.DivX.style.height; else this.DivX.style["background-position"] = "-0px -" + 0 + "px";
    };
    NBDirButton.prototype.judge = function () {
      var boo = true;
      if (this.Data.switchScript.length > 0) {
        boo = boo && !!eval(eval(this.Data.switchScript));
      }
      if (this.Data.switch > 0) {
        boo = boo && $gameSwitches.value(this.Data.switch);
      }
      if (this.Data.textHide) {
        var ts = $gameMessage.isBusy();
        if (ts) {
          this.textShowDelay = 10;
          boo = false;
        } else if (this.textShowDelay > 0) {
          this.textShowDelay--;
          boo = false;
        } else boo = true;
      }
      if (SceneManager._scene) {
        if (this.Data["showOn" + SceneManager._scene.constructor.name.toString()]) {
          boo = boo && !!eval(this.Data["showOn" + SceneManager._scene.constructor.name.toString()]);
        } else {
          boo = boo && defaultSceneShow;
        }
      } else {
        boo = boo && defaultSceneShow;
      }
      return boo;
    };
    QJ.B.calculateAngleByTwoPoint = function (x, y, ex, ey) {
      var ro;
      if (ex > x && ey < y) ro = -Math.atan((x - ex) / (y - ey));
      if (ex > x && ey > y) ro = Math.PI - Math.atan((x - ex) / (y - ey));
      if (ex < x && ey > y) ro = Math.PI - Math.atan((x - ex) / (y - ey));
      if (ex < x && ey < y) ro = 2 * Math.PI - Math.atan((x - ex) / (y - ey));
      if (ex == x && ey > y) ro = Math.PI;
      if (ex == x && ey < y) ro = 0;
      if (ex > x && ey == y) ro = Math.PI / 2;
      if (ex < x && ey == y) ro = Math.PI * 3 / 2;
      if (ex == x && ey == y) ro = null;
      return ro;
    };
    NBDirButton.prototype.setInput = function (xx, yy) {
      this.xx = xx - this.widthx / 2;
      this.yx = yy - this.heightx / 2;
      this.DivX.style.left = this.xx + "px";
      this.DivX.style.top = this.yx + "px";
      this.touchx = xx - this.x - this.width / 2;
      this.touchy = yy - this.y - this.height / 2;
      var ro = QJ.B.calculateAngleByTwoPoint(0, 0, this.touchx, this.touchy),
        de = this.straightDegree;
      if (ro <= de) {
        Input._currentState['down'] = false;
        Input._currentState['left'] = false;
        Input._currentState['right'] = false;
        Input._currentState['up'] = true;
      } else if (ro <= Math.PI / 2 - de) {
        Input._currentState['down'] = false;
        Input._currentState['left'] = false;
        Input._currentState['right'] = true;
        Input._currentState['up'] = true;
      } else if (ro <= Math.PI / 2 + de) {
        Input._currentState['down'] = false;
        Input._currentState['left'] = false;
        Input._currentState['right'] = true;
        Input._currentState['up'] = false;
      } else if (ro <= Math.PI - de) {
        Input._currentState['down'] = true;
        Input._currentState['left'] = false;
        Input._currentState['right'] = true;
        Input._currentState['up'] = false;
      } else if (ro <= Math.PI + de) {
        Input._currentState['down'] = true;
        Input._currentState['left'] = false;
        Input._currentState['right'] = false;
        Input._currentState['up'] = false;
      } else if (ro <= Math.PI * 3 / 2 - de) {
        Input._currentState['down'] = true;
        Input._currentState['left'] = true;
        Input._currentState['right'] = false;
        Input._currentState['up'] = false;
      } else if (ro <= Math.PI * 3 / 2 + de) {
        Input._currentState['down'] = false;
        Input._currentState['left'] = true;
        Input._currentState['right'] = false;
        Input._currentState['up'] = false;
      } else if (ro <= Math.PI * 2 - de) {
        Input._currentState['down'] = false;
        Input._currentState['left'] = true;
        Input._currentState['right'] = false;
        Input._currentState['up'] = true;
      } else {
        Input._currentState['down'] = false;
        Input._currentState['left'] = false;
        Input._currentState['right'] = false;
        Input._currentState['up'] = true;
      }
    };
    NBDirButton.prototype.clearInput = function () {
      this.touchx = 0;
      this.touchy = 0;
      Input._currentState['up'] = false;
      Input._currentState['down'] = false;
      Input._currentState['left'] = false;
      Input._currentState['right'] = false;
      this.DivX.style.left = this.x + this.width / 2 - this.widthx / 2 + "px";
      this.DivX.style.top = this.y + this.height / 2 - this.heightx / 2 + "px";
    };
    NBDirButton.prototype.refreshPosition = function () {
      if (true) {
        var x = true,
          data = this.Data,
          newDiv = this.Div;
        var buttonw = Math.floor((x ? data.width : data.widthx) * data.scale / 100 * NBRealZoom),
          buttonh;
        if (data.pressChange) {
          buttonh = Math.floor((x ? data.height : data.heightx / 2) * data.scale / 100 * NBRealZoom);
        } else {
          buttonh = Math.floor((x ? data.height : data.heightx) * data.scale / 100 * NBRealZoom);
        }
        newDiv.style.width = buttonw + "px";
        newDiv.style.height = buttonh + "px";
        newDiv.style.top = dealTextContent(data.y, x, data, buttonw, buttonh) + "px";
        newDiv.style.left = dealTextContent(data.x, x, data, buttonw, buttonh) + "px";
        if (data.pressChange) {
          newDiv.style["background-size"] = buttonw + "px " + (x ? buttonh : buttonh * 2) + "px";
        } else {
          newDiv.style["background-size"] = buttonw + "px " + buttonh + "px";
        }
        newDiv.style.opacity = this.Data.opacity / 255;
      }
      if (true) {
        var _x = false,
          _data = this.Data,
          _newDiv = this.DivX; //中间按钮
        var _buttonw = Math.floor((_x ? _data.width : _data.widthx) * _data.scale / 100 * NBRealZoom),
          _buttonh;
        if (_data.pressChange) {
          _buttonh = Math.floor((_x ? _data.height : _data.heightx / 2) * _data.scale / 100 * NBRealZoom);
        } else {
          _buttonh = Math.floor((_x ? _data.height : _data.heightx) * _data.scale / 100 * NBRealZoom);
        }
        _newDiv.style.width = _buttonw + "px";
        _newDiv.style.height = _buttonh + "px";
        _newDiv.style.top = Number(this.Div.style.top.substr(0, this.Div.style.top.length - 2)) + Number(this.Div.style.height.substr(0, this.Div.style.height.length - 2)) / 2 - _buttonw / 2 + "px";
        _newDiv.style.left = Number(this.Div.style.left.substr(0, this.Div.style.left.length - 2)) + Number(this.Div.style.width.substr(0, this.Div.style.width.length - 2)) / 2 - _buttonh / 2 + "px";
        if (_data.pressChange) {
          _newDiv.style["background-size"] = _buttonw + "px " + (_x ? _buttonh : _buttonh * 2) + "px";
        } else {
          _newDiv.style["background-size"] = _buttonw + "px " + _buttonh + "px";
        }
        _newDiv.style.opacity = this.Data.opacity / 255;
      }
      this.refreshData();
    };
    NBDirButton.prototype.resetData = function (scale, x, y, opacity) {
      this.Data.scale = scale;
      this.Data.x = x;
      this.Data.y = y;
      this.Data.opacity = opacity;
      this.refreshPosition();
    };
    //=============================================================================
    //
    //=============================================================================
    NBButton.prototype.initialize = function (data) {
      var _this2 = this;
      this.delta = false;
      this.Data = data;
      this.Data.textHide = this.Data.textHide ? eval(this.Data.textHide) : false;
      var moreScene = data.showOn.split("|");
      for (var i in moreScene) this.Data["showOn" + moreScene[i]] = true;
      this.Div = loadDiv(data, false);
      this.Press = false;
      this.PressAnim = false;
      this.show = null;
      this.refreshData();
      this.clearInput();
      var pointer = this;
      if (!Utils.isMobileDevice() && showOnPC) {
        this.Div.addEventListener('mousedown', function (e) {
          forBidButtonDesTemp = true;
          if (_this2.Data.type == "pressed") _this2.runData();
          if (canJudge()) {
            pointer.setInput();
            pointer.Press = true;
          }
          ;
        }, false);
        this.Div.addEventListener('mouseup', function () {
          if (_this2.Data.type == "triggered") _this2.runData();
          pointer.clearInput();
          pointer.Press = false;
        }, false);
        this.Div.addEventListener('mouseleave', function () {
          if (_this2.Data.type == "triggered") _this2.runData();
          pointer.clearInput();
          pointer.Press = false;
        }, false);
      }
      this.Div.addEventListener('touchstart', function (e) {
        forBidButtonDesTemp = true;
        if (_this2.Data.type == "pressed") _this2.runData();
        if (canJudge()) {
          pointer.setInput();
          pointer.Press = true;
        }
        ;
      }, false);
      this.Div.addEventListener('touchend', function () {
        if (_this2.Data.type == "triggered") _this2.runData();
        pointer.clearInput();
        pointer.Press = false;
      }, false);
    };
    NBButton.prototype.refreshData = function () {
      this.x = Number(this.Div.style.left.substr(0, this.Div.style.left.length - 2));
      this.y = Number(this.Div.style.top.substr(0, this.Div.style.top.length - 2));
      this.width = Number(this.Div.style.width.substr(0, this.Div.style.width.length - 2));
      this.height = Number(this.Div.style.height.substr(0, this.Div.style.height.length - 2));
      var remData = $gameVariables.button(this.Data.id) || {};
      remData["scale"] = this.Data.scale;
      remData["x"] = this.Data.x;
      remData["y"] = this.Data.y;
      remData["opacity"] = this.Data.opacity;
      $gameVariables.setButton(this.Data.id, remData);
    };
    NBButton.prototype.loadRemember = function () {
      var data = $gameVariables.button(this.Data.id);
      if (!data || Object.keys(data).length == 0) return;
      this.Data.x = data.x;
      this.Data.y = data.y;
      this.Data.opacity = data.opacity;
      this.Data.scale = data.scale;
      this.refreshPosition();
    };
    NBButton.prototype.runData = function () {
      if (this.Data.commonevent > 0) $gameTemp.reserveCommonEvent(this.Data.commonevent);
      if (this.Data.script.length > 0) eval(eval(this.Data.script));
    };
    NBButton.prototype.update = function () {
      if (this.Press != this.PressAnim) this.updateShow();
      if (this.judge() != this.show) {
        this.show = this.judge();
        if (this.show) this.Div.style.display = "block"; else this.Div.style.display = "none";
        this.Press = false;
        this.updateShow();
      }
    };
    NBButton.prototype.updateShow = function () {
      this.PressAnim = this.Press;
      if (this.Press && this.Data.pressChange) this.Div.style["background-position"] = "-0px -" + this.Div.style.height; else this.Div.style["background-position"] = "-0px -" + 0 + "px";
    };
    NBButton.prototype.judge = function () {
      var boo = true;
      if (this.Data.switchScript.length > 0) {
        boo = boo && !!eval(eval(this.Data.switchScript));
      }
      if (this.Data.switch > 0) {
        boo = boo && $gameSwitches.value(this.Data.switch);
      }
      if (this.Data.textHide) {
        var ts = $gameMessage.isBusy();
        if (ts) {
          this.textShowDelay = 10;
          boo = false;
        } else if (this.textShowDelay > 0) {
          this.textShowDelay--;
          boo = false;
        } else boo = true;
      }
      if (SceneManager._scene) {
        if (this.Data["showOn" + SceneManager._scene.constructor.name.toString()]) {
          boo = boo && !!eval(this.Data["showOn" + SceneManager._scene.constructor.name.toString()]);
        } else {
          boo = boo && defaultSceneShow;
        }
      } else {
        boo = boo && defaultSceneShow;
      }
      return boo;
    };
    NBButton.prototype.setInput = function () {
      if (this.Data.button.length > 0) {
        if (this.Data.button == 'left+up') {
          Input._currentState['left'] = true;
          Input._currentState['up'] = true;
        } else if (this.Data.button == 'left+down') {
          Input._currentState['left'] = true;
          Input._currentState['down'] = true;
        } else if (this.Data.button == 'right+up') {
          Input._currentState['right'] = true;
          Input._currentState['up'] = true;
        } else if (this.Data.button == 'right+down') {
          Input._currentState['right'] = true;
          Input._currentState['down'] = true;
        } else {
          Input._currentState[this.Data.button] = true;
        }
      }
    };
    NBButton.prototype.clearInput = function () {
      if (this.Data.button.length > 0) {
        if (this.Data.button == 'left+up') {
          Input._currentState['left'] = false;
          Input._currentState['up'] = false;
        } else if (this.Data.button == 'left+down') {
          Input._currentState['left'] = false;
          Input._currentState['down'] = false;
        } else if (this.Data.button == 'right+up') {
          Input._currentState['right'] = false;
          Input._currentState['up'] = false;
        } else if (this.Data.button == 'right+down') {
          Input._currentState['right'] = false;
          Input._currentState['down'] = false;
        } else {
          Input._currentState[this.Data.button] = false;
        }
      }
    };
    NBButton.prototype.refreshPosition = function () {
      var x = false,
        data = this.Data,
        newDiv = this.Div;
      var buttonw = Math.floor((x ? data.width : data.widthx) * data.scale / 100 * NBRealZoom),
        buttonh;
      if (data.pressChange) {
        buttonh = Math.floor((x ? data.height : data.heightx / 2) * data.scale / 100 * NBRealZoom);
      } else {
        buttonh = Math.floor((x ? data.height : data.heightx) * data.scale / 100 * NBRealZoom);
      }
      newDiv.style.width = buttonw + "px";
      newDiv.style.height = buttonh + "px";
      newDiv.style.top = dealTextContent(data.y, x, data, buttonw, buttonh) + "px";
      newDiv.style.left = dealTextContent(data.x, x, data, buttonw, buttonh) + "px";
      if (data.pressChange) {
        newDiv.style["background-size"] = buttonw + "px " + (x ? buttonh : buttonh * 2) + "px";
      } else {
        newDiv.style["background-size"] = buttonw + "px " + buttonh + "px";
      }
      newDiv.style.opacity = this.Data.opacity / 255;
      this.refreshData();
    };
    NBButton.prototype.resetData = function (scale, x, y, opacity) {
      this.Data.scale = scale;
      this.Data.x = x;
      this.Data.y = y;
      this.Data.opacity = opacity;
      this.refreshPosition();
    };
    //=============================================================================
    //
    //=============================================================================
    var NB_Scene_Base_update = Scene_Base.prototype.update;
    Scene_Base.prototype.update = function () {
      NB_Scene_Base_update.call(this);
      for (var data in NBButtonList) NBButtonList[data].update();
      if (!TouchInput.isPressed()) forBidButtonDesTemp = false;
    };
    var NB_Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function () {
      NB_Scene_Map_update.call(this);
      if (QJ.B.remember) {
        QJ.B.remember = false;
        if ($gameVariables._QJBRememberSize) setRealZoom($gameVariables._QJBRememberSize, 0);
        for (var i in NBButtonList) {
          NBButtonList[i].loadRemember();
        }
      }
    };
    function refreshF(){
      for(var i in NBButtonList){
        if(!NBButtonList[i].Data.widthx && !NBButtonList[i].Data.width) return setTimeout(refreshF,100);
      }
      NBButtonList.forEach(function(a){a.refreshPosition()});
      if(parameters.mod){
        window.addEventListener('resize', function () {
          setRealZoom(-1, 0);
        })
      }
    }
    function reshow(){
      if($gameVariables){ 
        show() 
        refreshF()
      }else{
        setTimeout(reshow,100);
      }
    }
    reshow();
  })();
}
