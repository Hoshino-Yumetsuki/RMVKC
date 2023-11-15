if(typeof window.reineQJ_Button === "undefined"){
  (function () {
    window.reineQJ_Button = true
    var parameters = {
      "button": "[\"{\\\"id\\\":\\\"Button_Visible_Control\\\",\\\"namex\\\":\\\"TZ1\\\",\\\"pressChange\\\":\\\"false\\\",\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\",\\\"scale\\\":\\\"100\\\",\\\"opacity\\\":\\\"200\\\",\\\"type\\\":\\\"pressed\\\",\\\"commonevent\\\":\\\"0\\\",\\\"script\\\":\\\"\\\\\\\"window['TZButtonVisible'] = !window['TZButtonVisible'];\\\\\\\"\\\",\\\"textHide\\\":\\\"false\\\",\\\"switch\\\":\\\"0\\\",\\\"switchScript\\\":\\\"\\\",\\\"button\\\":\\\"\\\",\\\"showOnScene_Title\\\":\\\"true\\\",\\\"showOnScene_Map\\\":\\\"true\\\",\\\"showOnScene_Menu\\\":\\\"true\\\",\\\"showOnScene_Item\\\":\\\"true\\\",\\\"showOnScene_Skill\\\":\\\"true\\\",\\\"showOnScene_Equip\\\":\\\"true\\\",\\\"showOnScene_Save\\\":\\\"true\\\",\\\"showOnScene_Load\\\":\\\"true\\\",\\\"showOnScene_GameEnd\\\":\\\"true\\\",\\\"showOnScene_Shop\\\":\\\"true\\\",\\\"showOnScene_Name\\\":\\\"true\\\",\\\"showOnScene_Battle\\\":\\\"true\\\",\\\"showOnScene_Gameover\\\":\\\"true\\\",\\\"showOnScene_Options\\\":\\\"true\\\",\\\"showOn\\\":\\\"\\\"}\",\"{\\\"id\\\":\\\"move7\\\",\\\"namex\\\":\\\"TZ6\\\",\\\"pressChange\\\":\\\"false\\\",\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"h-bh*3\\\",\\\"scale\\\":\\\"100\\\",\\\"opacity\\\":\\\"200\\\",\\\"type\\\":\\\"pressed\\\",\\\"commonevent\\\":\\\"0\\\",\\\"script\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"textHide\\\":\\\"false\\\",\\\"switch\\\":\\\"0\\\",\\\"switchScript\\\":\\\"\\\\\\\"!window['TZButtonVisible']\\\\\\\"\\\",\\\"button\\\":\\\"left+up\\\",\\\"showOnScene_Title\\\":\\\"true\\\",\\\"showOnScene_Map\\\":\\\"true\\\",\\\"showOnScene_Menu\\\":\\\"true\\\",\\\"showOnScene_Item\\\":\\\"true\\\",\\\"showOnScene_Skill\\\":\\\"true\\\",\\\"showOnScene_Equip\\\":\\\"true\\\",\\\"showOnScene_Save\\\":\\\"true\\\",\\\"showOnScene_Load\\\":\\\"true\\\",\\\"showOnScene_GameEnd\\\":\\\"true\\\",\\\"showOnScene_Shop\\\":\\\"true\\\",\\\"showOnScene_Name\\\":\\\"true\\\",\\\"showOnScene_Battle\\\":\\\"true\\\",\\\"showOnScene_Gameover\\\":\\\"true\\\",\\\"showOnScene_Options\\\":\\\"true\\\",\\\"showOn\\\":\\\"\\\"}\",\"{\\\"id\\\":\\\"move8\\\",\\\"namex\\\":\\\"TZ6\\\",\\\"pressChange\\\":\\\"false\\\",\\\"x\\\":\\\"bw\\\",\\\"y\\\":\\\"h-bh*3\\\",\\\"scale\\\":\\\"100\\\",\\\"opacity\\\":\\\"200\\\",\\\"type\\\":\\\"pressed\\\",\\\"commonevent\\\":\\\"0\\\",\\\"script\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"textHide\\\":\\\"false\\\",\\\"switch\\\":\\\"0\\\",\\\"switchScript\\\":\\\"\\\\\\\"!window['TZButtonVisible']\\\\\\\"\\\",\\\"button\\\":\\\"up\\\",\\\"showOnScene_Title\\\":\\\"true\\\",\\\"showOnScene_Map\\\":\\\"true\\\",\\\"showOnScene_Menu\\\":\\\"true\\\",\\\"showOnScene_Item\\\":\\\"true\\\",\\\"showOnScene_Skill\\\":\\\"true\\\",\\\"showOnScene_Equip\\\":\\\"true\\\",\\\"showOnScene_Save\\\":\\\"true\\\",\\\"showOnScene_Load\\\":\\\"true\\\",\\\"showOnScene_GameEnd\\\":\\\"true\\\",\\\"showOnScene_Shop\\\":\\\"true\\\",\\\"showOnScene_Name\\\":\\\"true\\\",\\\"showOnScene_Battle\\\":\\\"true\\\",\\\"showOnScene_Gameover\\\":\\\"true\\\",\\\"showOnScene_Options\\\":\\\"true\\\",\\\"showOn\\\":\\\"\\\"}\",\"{\\\"id\\\":\\\"move9\\\",\\\"namex\\\":\\\"TZ6\\\",\\\"pressChange\\\":\\\"false\\\",\\\"x\\\":\\\"bw*2\\\",\\\"y\\\":\\\"h-bh*3\\\",\\\"scale\\\":\\\"100\\\",\\\"opacity\\\":\\\"200\\\",\\\"type\\\":\\\"pressed\\\",\\\"commonevent\\\":\\\"0\\\",\\\"script\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"textHide\\\":\\\"false\\\",\\\"switch\\\":\\\"0\\\",\\\"switchScript\\\":\\\"\\\\\\\"!window['TZButtonVisible']\\\\\\\"\\\",\\\"button\\\":\\\"right+up\\\",\\\"showOnScene_Title\\\":\\\"true\\\",\\\"showOnScene_Map\\\":\\\"true\\\",\\\"showOnScene_Menu\\\":\\\"true\\\",\\\"showOnScene_Item\\\":\\\"true\\\",\\\"showOnScene_Skill\\\":\\\"true\\\",\\\"showOnScene_Equip\\\":\\\"true\\\",\\\"showOnScene_Save\\\":\\\"true\\\",\\\"showOnScene_Load\\\":\\\"true\\\",\\\"showOnScene_GameEnd\\\":\\\"true\\\",\\\"showOnScene_Shop\\\":\\\"true\\\",\\\"showOnScene_Name\\\":\\\"true\\\",\\\"showOnScene_Battle\\\":\\\"true\\\",\\\"showOnScene_Gameover\\\":\\\"true\\\",\\\"showOnScene_Options\\\":\\\"true\\\",\\\"showOn\\\":\\\"\\\"}\",\"{\\\"id\\\":\\\"move4\\\",\\\"namex\\\":\\\"TZ6\\\",\\\"pressChange\\\":\\\"false\\\",\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"h-bh*2\\\",\\\"scale\\\":\\\"100\\\",\\\"opacity\\\":\\\"200\\\",\\\"type\\\":\\\"pressed\\\",\\\"commonevent\\\":\\\"0\\\",\\\"script\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"textHide\\\":\\\"false\\\",\\\"switch\\\":\\\"0\\\",\\\"switchScript\\\":\\\"\\\\\\\"!window['TZButtonVisible']\\\\\\\"\\\",\\\"button\\\":\\\"left\\\",\\\"showOnScene_Title\\\":\\\"true\\\",\\\"showOnScene_Map\\\":\\\"true\\\",\\\"showOnScene_Menu\\\":\\\"true\\\",\\\"showOnScene_Item\\\":\\\"true\\\",\\\"showOnScene_Skill\\\":\\\"true\\\",\\\"showOnScene_Equip\\\":\\\"true\\\",\\\"showOnScene_Save\\\":\\\"true\\\",\\\"showOnScene_Load\\\":\\\"true\\\",\\\"showOnScene_GameEnd\\\":\\\"true\\\",\\\"showOnScene_Shop\\\":\\\"true\\\",\\\"showOnScene_Name\\\":\\\"true\\\",\\\"showOnScene_Battle\\\":\\\"true\\\",\\\"showOnScene_Gameover\\\":\\\"true\\\",\\\"showOnScene_Options\\\":\\\"true\\\",\\\"showOn\\\":\\\"\\\"}\",\"{\\\"id\\\":\\\"move6\\\",\\\"namex\\\":\\\"TZ6\\\",\\\"pressChange\\\":\\\"false\\\",\\\"x\\\":\\\"bw*2\\\",\\\"y\\\":\\\"h-bh*2\\\",\\\"scale\\\":\\\"100\\\",\\\"opacity\\\":\\\"200\\\",\\\"type\\\":\\\"pressed\\\",\\\"commonevent\\\":\\\"0\\\",\\\"script\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"textHide\\\":\\\"false\\\",\\\"switch\\\":\\\"0\\\",\\\"switchScript\\\":\\\"\\\\\\\"!window['TZButtonVisible']\\\\\\\"\\\",\\\"button\\\":\\\"right\\\",\\\"showOnScene_Title\\\":\\\"true\\\",\\\"showOnScene_Map\\\":\\\"true\\\",\\\"showOnScene_Menu\\\":\\\"true\\\",\\\"showOnScene_Item\\\":\\\"true\\\",\\\"showOnScene_Skill\\\":\\\"true\\\",\\\"showOnScene_Equip\\\":\\\"true\\\",\\\"showOnScene_Save\\\":\\\"true\\\",\\\"showOnScene_Load\\\":\\\"true\\\",\\\"showOnScene_GameEnd\\\":\\\"true\\\",\\\"showOnScene_Shop\\\":\\\"true\\\",\\\"showOnScene_Name\\\":\\\"true\\\",\\\"showOnScene_Battle\\\":\\\"true\\\",\\\"showOnScene_Gameover\\\":\\\"true\\\",\\\"showOnScene_Options\\\":\\\"true\\\",\\\"showOn\\\":\\\"\\\"}\",\"{\\\"id\\\":\\\"move3\\\",\\\"namex\\\":\\\"TZ6\\\",\\\"pressChange\\\":\\\"false\\\",\\\"x\\\":\\\"bw*2\\\",\\\"y\\\":\\\"h-bh\\\",\\\"scale\\\":\\\"100\\\",\\\"opacity\\\":\\\"200\\\",\\\"type\\\":\\\"pressed\\\",\\\"commonevent\\\":\\\"0\\\",\\\"script\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"textHide\\\":\\\"false\\\",\\\"switch\\\":\\\"0\\\",\\\"switchScript\\\":\\\"\\\\\\\"!window['TZButtonVisible']\\\\\\\"\\\",\\\"button\\\":\\\"right+down\\\",\\\"showOnScene_Title\\\":\\\"true\\\",\\\"showOnScene_Map\\\":\\\"true\\\",\\\"showOnScene_Menu\\\":\\\"true\\\",\\\"showOnScene_Item\\\":\\\"true\\\",\\\"showOnScene_Skill\\\":\\\"true\\\",\\\"showOnScene_Equip\\\":\\\"true\\\",\\\"showOnScene_Save\\\":\\\"true\\\",\\\"showOnScene_Load\\\":\\\"true\\\",\\\"showOnScene_GameEnd\\\":\\\"true\\\",\\\"showOnScene_Shop\\\":\\\"true\\\",\\\"showOnScene_Name\\\":\\\"true\\\",\\\"showOnScene_Battle\\\":\\\"true\\\",\\\"showOnScene_Gameover\\\":\\\"true\\\",\\\"showOnScene_Options\\\":\\\"true\\\",\\\"showOn\\\":\\\"\\\"}\",\"{\\\"id\\\":\\\"move1\\\",\\\"namex\\\":\\\"TZ6\\\",\\\"pressChange\\\":\\\"false\\\",\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"h-bh\\\",\\\"scale\\\":\\\"100\\\",\\\"opacity\\\":\\\"200\\\",\\\"type\\\":\\\"pressed\\\",\\\"commonevent\\\":\\\"0\\\",\\\"script\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"textHide\\\":\\\"false\\\",\\\"switch\\\":\\\"0\\\",\\\"switchScript\\\":\\\"\\\\\\\"!window['TZButtonVisible']\\\\\\\"\\\",\\\"button\\\":\\\"left+down\\\",\\\"showOnScene_Title\\\":\\\"true\\\",\\\"showOnScene_Map\\\":\\\"true\\\",\\\"showOnScene_Menu\\\":\\\"true\\\",\\\"showOnScene_Item\\\":\\\"true\\\",\\\"showOnScene_Skill\\\":\\\"true\\\",\\\"showOnScene_Equip\\\":\\\"true\\\",\\\"showOnScene_Save\\\":\\\"true\\\",\\\"showOnScene_Load\\\":\\\"true\\\",\\\"showOnScene_GameEnd\\\":\\\"true\\\",\\\"showOnScene_Shop\\\":\\\"true\\\",\\\"showOnScene_Name\\\":\\\"true\\\",\\\"showOnScene_Battle\\\":\\\"true\\\",\\\"showOnScene_Gameover\\\":\\\"true\\\",\\\"showOnScene_Options\\\":\\\"true\\\",\\\"showOn\\\":\\\"\\\"}\",\"{\\\"id\\\":\\\"move2\\\",\\\"namex\\\":\\\"TZ6\\\",\\\"pressChange\\\":\\\"false\\\",\\\"x\\\":\\\"bw\\\",\\\"y\\\":\\\"h-bh\\\",\\\"scale\\\":\\\"100\\\",\\\"opacity\\\":\\\"200\\\",\\\"type\\\":\\\"pressed\\\",\\\"commonevent\\\":\\\"0\\\",\\\"script\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"textHide\\\":\\\"false\\\",\\\"switch\\\":\\\"0\\\",\\\"switchScript\\\":\\\"\\\\\\\"!window['TZButtonVisible']\\\\\\\"\\\",\\\"button\\\":\\\"down\\\",\\\"showOnScene_Title\\\":\\\"true\\\",\\\"showOnScene_Map\\\":\\\"true\\\",\\\"showOnScene_Menu\\\":\\\"true\\\",\\\"showOnScene_Item\\\":\\\"true\\\",\\\"showOnScene_Skill\\\":\\\"true\\\",\\\"showOnScene_Equip\\\":\\\"true\\\",\\\"showOnScene_Save\\\":\\\"true\\\",\\\"showOnScene_Load\\\":\\\"true\\\",\\\"showOnScene_GameEnd\\\":\\\"true\\\",\\\"showOnScene_Shop\\\":\\\"true\\\",\\\"showOnScene_Name\\\":\\\"true\\\",\\\"showOnScene_Battle\\\":\\\"true\\\",\\\"showOnScene_Gameover\\\":\\\"true\\\",\\\"showOnScene_Options\\\":\\\"true\\\",\\\"showOn\\\":\\\"\\\"}\",\"{\\\"id\\\":\\\"shift\\\",\\\"namex\\\":\\\"TZ8\\\",\\\"pressChange\\\":\\\"false\\\",\\\"x\\\":\\\"w-bw*3\\\",\\\"y\\\":\\\"h-bh*2\\\",\\\"scale\\\":\\\"100\\\",\\\"opacity\\\":\\\"200\\\",\\\"type\\\":\\\"pressed\\\",\\\"commonevent\\\":\\\"0\\\",\\\"script\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"textHide\\\":\\\"false\\\",\\\"switch\\\":\\\"0\\\",\\\"switchScript\\\":\\\"\\\\\\\"!window['TZButtonVisible']\\\\\\\"\\\",\\\"button\\\":\\\"shift\\\",\\\"showOnScene_Title\\\":\\\"true\\\",\\\"showOnScene_Map\\\":\\\"true\\\",\\\"showOnScene_Menu\\\":\\\"true\\\",\\\"showOnScene_Item\\\":\\\"true\\\",\\\"showOnScene_Skill\\\":\\\"true\\\",\\\"showOnScene_Equip\\\":\\\"true\\\",\\\"showOnScene_Save\\\":\\\"true\\\",\\\"showOnScene_Load\\\":\\\"true\\\",\\\"showOnScene_GameEnd\\\":\\\"true\\\",\\\"showOnScene_Shop\\\":\\\"true\\\",\\\"showOnScene_Name\\\":\\\"true\\\",\\\"showOnScene_Battle\\\":\\\"true\\\",\\\"showOnScene_Gameover\\\":\\\"true\\\",\\\"showOnScene_Options\\\":\\\"true\\\",\\\"showOn\\\":\\\"\\\"}\",\"{\\\"id\\\":\\\"ok\\\",\\\"namex\\\":\\\"TZ9\\\",\\\"pressChange\\\":\\\"false\\\",\\\"x\\\":\\\"w-bw*2\\\",\\\"y\\\":\\\"h-bh\\\",\\\"scale\\\":\\\"100\\\",\\\"opacity\\\":\\\"200\\\",\\\"type\\\":\\\"pressed\\\",\\\"commonevent\\\":\\\"0\\\",\\\"script\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"textHide\\\":\\\"false\\\",\\\"switch\\\":\\\"0\\\",\\\"switchScript\\\":\\\"\\\\\\\"!window['TZButtonVisible']\\\\\\\"\\\",\\\"button\\\":\\\"ok\\\",\\\"showOnScene_Title\\\":\\\"true\\\",\\\"showOnScene_Map\\\":\\\"true\\\",\\\"showOnScene_Menu\\\":\\\"true\\\",\\\"showOnScene_Item\\\":\\\"true\\\",\\\"showOnScene_Skill\\\":\\\"true\\\",\\\"showOnScene_Equip\\\":\\\"true\\\",\\\"showOnScene_Save\\\":\\\"true\\\",\\\"showOnScene_Load\\\":\\\"true\\\",\\\"showOnScene_GameEnd\\\":\\\"true\\\",\\\"showOnScene_Shop\\\":\\\"true\\\",\\\"showOnScene_Name\\\":\\\"true\\\",\\\"showOnScene_Battle\\\":\\\"true\\\",\\\"showOnScene_Gameover\\\":\\\"true\\\",\\\"showOnScene_Options\\\":\\\"true\\\",\\\"showOn\\\":\\\"\\\"}\",\"{\\\"id\\\":\\\"cancel\\\",\\\"namex\\\":\\\"TZ10\\\",\\\"pressChange\\\":\\\"false\\\",\\\"x\\\":\\\"w-bw\\\",\\\"y\\\":\\\"h-bh*2\\\",\\\"scale\\\":\\\"100\\\",\\\"opacity\\\":\\\"200\\\",\\\"type\\\":\\\"pressed\\\",\\\"commonevent\\\":\\\"49\\\",\\\"script\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"textHide\\\":\\\"false\\\",\\\"switch\\\":\\\"0\\\",\\\"switchScript\\\":\\\"\\\\\\\"!window['TZButtonVisible']\\\\\\\"\\\",\\\"button\\\":\\\"escape\\\",\\\"showOnScene_Title\\\":\\\"true\\\",\\\"showOnScene_Map\\\":\\\"true\\\",\\\"showOnScene_Menu\\\":\\\"true\\\",\\\"showOnScene_Item\\\":\\\"true\\\",\\\"showOnScene_Skill\\\":\\\"true\\\",\\\"showOnScene_Equip\\\":\\\"true\\\",\\\"showOnScene_Save\\\":\\\"true\\\",\\\"showOnScene_Load\\\":\\\"true\\\",\\\"showOnScene_GameEnd\\\":\\\"true\\\",\\\"showOnScene_Shop\\\":\\\"true\\\",\\\"showOnScene_Name\\\":\\\"true\\\",\\\"showOnScene_Battle\\\":\\\"true\\\",\\\"showOnScene_Gameover\\\":\\\"true\\\",\\\"showOnScene_Options\\\":\\\"true\\\",\\\"showOn\\\":\\\"\\\"}\"]",
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
    };

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
        for (var i=0;i<NBButtonList.length;i++) {
          if (NBButtonList[i].DivX) {
            NBButtonList[i].refreshPosition();
            break;
          }
        }
      } else {
        for (var i=0;i<NBButtonList.length;i++) {
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
      "./img/button/BtnCir.png":"https://axutebils74.github.io/vK/collections/QJ_Button/v0/BtnCir.png",
      "./img/button/DirPad.png":"https://axutebils74.github.io/vK/collections/QJ_Button/v0/DirPad.png",
      "./img/button/TZ1.png":"https://axutebils74.github.io/vK/collections/QJ_Button/v0/TZ1.png",
      "./img/button/TZ6.png":"https://axutebils74.github.io/vK/collections/QJ_Button/v0/TZ6.png",
      "./img/button/TZ8.png":"https://axutebils74.github.io/vK/collections/QJ_Button/v0/TZ8.png",
      "./img/button/TZ9.png":"https://axutebils74.github.io/vK/collections/QJ_Button/v0/TZ9.png",
      "./img/button/TZ10.png":"https://axutebils74.github.io/vK/collections/QJ_Button/v0/TZ10.png"
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
        for (var data=0;data<button.length;data++) d.push(JsonEx.parse(button[data]));
        for (var j=0;j<d.length;j++) {
          var data = QJ.B.loadDetailData(d[j]);
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
      for (var i=0;i<NBButtonList.length;i++) {
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
          for (var data=0;data<button.length;data++) {
            d.push(QJ.B.loadDetailData(JsonEx.parse(button[data])));
          }
          for (var _i=0;_i<d.length;_i++) {
            var i = d[_i];
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
          for (var data=0;data<button.length;data++) {
            d.push(QJ.B.loadDetailData(JsonEx.parse(button[data])));
          }
          for (var i=0;i<d.length;i++) {
            var _i = d[i];
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
        for (var i=0;i<moreScene.length;i++) this.Data["showOn" + moreScene[i]] = true;
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
      for (var i=0;i<moreScene.length;i++) this.Data["showOn" + moreScene[i]] = true;
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
      for (var data=0;data<NBButtonList.length;data++) NBButtonList[data].update();
      if (!TouchInput.isPressed()) forBidButtonDesTemp = false;
    };
    var NB_Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function () {
      NB_Scene_Map_update.call(this);
      if (QJ.B.remember) {
        QJ.B.remember = false;
        if ($gameVariables._QJBRememberSize) setRealZoom($gameVariables._QJBRememberSize, 0);
        for (var i=0;i<NBButtonList.length;i++) {
          NBButtonList[i].loadRemember();
        }
      }
    };
    function refreshF(){
      for(var i=0;i<NBButtonList.length;i++){
        if(!NBButtonList[i].Data.widthx && !NBButtonList[i].Data.width) return setTimeout(refreshF,100);
      }
      if(parameters.mod){
        window.addEventListener('resize', function () {
          setRealZoom(-1, 0);
        })
      }
      NBButtonList.forEach(function(a){a.refreshPosition()});
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