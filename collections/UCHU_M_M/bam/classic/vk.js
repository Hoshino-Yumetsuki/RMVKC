if(window.reineUCHU_MobileOperation_Modified){
    var scripts = document.getElementsByTagName("script"), script = document.currentScript || scripts[scripts.length - 1]
    var url = script.src.split("?").slice(1).join("?");
    try{
        if(~url.indexOf("off")){
            document.getElementById("Dirpad").hidden = '';
            document.getElementById("okBtn").hidden = '';
            document.getElementById("escapeBtn").hidden = ''
        }else{
            document.getElementById("Dirpad").hidden = 'hidden';
            document.getElementById("okBtn").hidden = 'hidden';
            document.getElementById("escapeBtn").hidden = 'hidden'
        }

    }catch(e){}
}else{
    (function() {
        window.reineUCHU_MobileOperation_Modified = true
        "use strict";
        var Parameters = {
            "PC BtnDisplay": "false",
            "PC TouchExtend": "false",
            "DPad Image": "DirPad",
            "ActionBtn Image": "ActionButton",
            "CancelBtn Image": "CancelButton",
            "Button Opacity": "0.700",
            "Vertical BtnZoom": "1.700",
            "Tablet BtnZoom": "0.800",
            "TabVertical BtnZoom": "1.100",
            "HideButton OnMessage": "true",
            "HideButton Switch": "0",
            "HideButton Switch Value": "false",
            "DPad Visible": "true",
            "DPad Size": "180",
            "DPad Margin": "30; 20",
            "DPad Orientation": "left; bottom",
            "DPad OpelationRange": "1.300",
            "DPad DiagonalRange": "0.300",
            "ActionBtn Visible": "true",
            "ActionBtn Size": "130",
            "ActionBtn Margin": "30; 30",
            "ActionBtn Orientation": "right; bottom",
            "CancelBtn Visible": "true",
            "CancelBtn Size": "130",
            "CancelBtn Margin": "30; 30",
            "CancelBtn Orientation": "right; top",
            "Flick PageUp-PageDown": "true",
            "HoldCanvas ActionBtn": "true",
            "OutCanvas CancelBtn": "false",
            "OutCanvas ActionBtn": "false",
            "Analog Move": "false",
            "Analog Sensitivity": "1.800"
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
                    Parameters[i] = obj1[i];
                  break
              }
              l && (Parameters[l] = decodeURIComponent(r))
          } catch (t) {}
        }
        var E = {
            "./img/system/ActionButton.png":"https://axutebils74.github.io/vK/collections/UCHU_M_M/bam/classic/ActionButton.png",
            "./img/system/CancelButton.png":"https://axutebils74.github.io/vK/collections/UCHU_M_M/bam/classic/CancelButton.png",
            "./img/system/DirPad.png":"https://axutebils74.github.io/vK/collections/UCHU_M_M/bam/classic/DirPad.png"
        }
        function D(x){
            return  E[x] || x; 
        }


        var PRM = PRM || {};
        
        PRM.url=[];
        PRM.visible=[];
        PRM.size=[];
        PRM.pos=[];
        PRM.spot=[];
        
        PRM.pcBtn = Boolean(Parameters["PC BtnDisplay"] === 'true' || false);
        PRM.pcExt = Boolean(Parameters["PC TouchExtend"] === 'true' || false);
        PRM.url[0] = D("./img/system/" + String(Parameters["DPad Image"]) + ".png");
        PRM.url[1] = D("./img/system/" + String(Parameters["ActionBtn Image"])+ ".png");
        PRM.url[2] = D("./img/system/" + String(Parameters["CancelBtn Image"])+ ".png");
        PRM.opacity = Number(Parameters["Button Opacity"]);
        PRM.vZoom = Number(Parameters["Vertical BtnZoom"]);
        PRM.tabZoom = Number(Parameters["Tablet BtnZoom"]);
        PRM.tabvZoom = Number(Parameters["TabVertical BtnZoom"]);
        PRM.hideBtn = Boolean(Parameters["HideButton OnMessage"] === 'true' || false);
        PRM.visible[0] = Boolean(Parameters["DPad Visible"] === 'true' || false);
        PRM.size[0] = Number(Parameters["DPad Size"]);
        PRM.pos[0] =Parameters["DPad Margin"].split(";");
        PRM.spot[0] = Parameters["DPad Orientation"].split(";");
        PRM.pad_scale = Number(Parameters["DPad OpelationRange"]);
        PRM.pad_dia = Math.max(0,Math.min(1,(1-Number(Parameters["DPad DiagonalRange"]))));
        PRM.visible[1] = Boolean(Parameters["ActionBtn Visible"] === 'true' || false);
        PRM.size[1] = Number(Parameters["ActionBtn Size"]);
        PRM.pos[1] = Parameters["ActionBtn Margin"].split(";");
        PRM.spot[1] = Parameters["ActionBtn Orientation"].split(";");
        PRM.visible[2] = Boolean(Parameters["CancelBtn Visible"] === 'true' || false);
        PRM.size[2] = Number(Parameters["CancelBtn Size"]);
        PRM.pos[2] = Parameters["CancelBtn Margin"].split(";");
        PRM.spot[2] = Parameters["CancelBtn Orientation"].split(";");
        PRM.flickpage = Boolean(Parameters["Flick PageUp-PageDown"] === 'true' || false);
        PRM.holdaction = Boolean(Parameters["HoldCanvas ActionBtn"] === 'true' || false);
        PRM.outcansel = Boolean(Parameters["OutCanvas CancelBtn"] === 'true' || false);
        PRM.outaction = Boolean(Parameters["OutCanvas ActionBtn"] === 'true' || false);
        PRM.analogmove = Boolean(Parameters["Analog Move"] === 'true' || false);
        PRM.sensitivity = Number(Parameters["Analog Sensitivity"]);
        //改変者による機能追加
        PRM.hideBtnSwitch = Number(Parameters["HideButton Switch"]);
        PRM.hideBtnSwitchValue = Boolean(Parameters["HideButton Switch Value"] === 'true' || false);
        
        var btn_id=["DirPad","ok","escape"];
        var current_zoom=1;	
        var st_x = 0;
        var st_y = 0;
        var pad_range=PRM.size[0]*PRM.pad_scale;
        var pad_size=pad_range*current_zoom/2;
        var Btn_ready=false;
        var Btn_hide=false;
        var PressBtn=false;
        var dirx=0;
        var diry=0;
        var touchx=0;
        var touchy=0;
        var autofire=false;
        var hvzoom=[1, PRM.vZoom];
        var ua = (function(u){
          return {
            Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1) || u.indexOf("ipad") != -1 || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1) || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1) || u.indexOf("kindle") != -1 || u.indexOf("silk") != -1 || u.indexOf("playbook") != -1
          };
        })(window.navigator.userAgent.toLowerCase());
    
        if(ua.Tablet){
            hvzoom=[PRM.tabZoom, PRM.tabvZoom];
        }
        if (!Utils.isMobileDevice() && !PRM.pcBtn) {PRM.visible[0]=PRM.visible[1]=PRM.visible[2]=false;}
    
        //-----------------------------------------------------------------------------
        // Locate_DirPad
    
        function Locate_DirPad() {
            this.initialize.apply(this, arguments);
        }
    
    
        Locate_DirPad.prototype.initialize = function() {
            var img = new Image();
            var url = PRM.url[0];
            img.onerror = function() {Graphics.printError('DirPad Image was Not Found:',url);};
            img.src = url;
            img = null;
            this.Div = document.createElement("div");
            this.Div.id = 'Dirpad';
            this.Div.style.position = 'fixed';
            this.Div.style[PRM.spot[0][0].replace(/\s+/g, "")] = String(PRM.pos[0][0]-(pad_range-PRM.size[0])/2)+'px';
            this.Div.style[PRM.spot[0][1].replace(/\s+/g, "")] = String(PRM.pos[0][1]-(pad_range-PRM.size[0])/2)+'px';
            this.Div.style.width = pad_range+'px';
            this.Div.style.height = pad_range+'px';
            this.Div.style.opacity = PRM.opacity;
            this.Div.style.zIndex = '11';
            this.Div.style.userSelect="none";
            this.Div.style["-webkit-tap-highlight-color"]="rgba(0,0,0,0)";
            this.Div.style.background = 'url('+PRM.url[0]+') 50% 50% / '+String(Math.round(PRM.size[0]/pad_range*100))+'% no-repeat';
            
            if(!Utils.isMobileDevice() && PRM.pcBtn){
                this.Div.addEventListener('mousedown', function(e) {
                  if (!SceneManager.isSceneChanging()){dirope(e.layerX,e.layerY,true);PressBtn=true;}
                }, false);
                this.Div.addEventListener('mousemove', function(e) {
                  if(PressBtn && !SceneManager.isSceneChanging()){dirope(e.layerX,e.layerY,false);}
                }, false);
                this.Div.addEventListener('mouseup', function() {
                    disope();PressBtn=false;
                }, false);
                this.Div.addEventListener('mouseout', function() {
                    disope();PressBtn=false;
                }, false);
            }
            this.Div.addEventListener('touchstart', function(e) {
                PressBtn=true;
                if (!SceneManager.isSceneChanging()){dirope(e.touches[0].clientX-dirx, e.touches[0].clientY-diry,true)};
            }, false);
            this.Div.addEventListener('touchmove', function(e) {
                if (!SceneManager.isSceneChanging()){dirope(e.touches[0].clientX-dirx, e.touches[0].clientY-diry,false)};
                PressBtn=true;
            }, false);
            this.Div.addEventListener('touchend', function() {
                disope();PressBtn=false;
            }, false);
                document.body.appendChild(this.Div);
        };
        
        function dirope(xx,yy,st) {
            touchx=(xx-pad_size)/pad_size;
            touchy=(yy-pad_size)/pad_size;
            if(st && Math.sqrt(touchx*touchx+touchy*touchy)>1){
                disope();
            }else{
                if(touchx>Math.abs(touchy)*PRM.pad_dia){Input._currentState['right']=true;Input._currentState['left']=false;}
                else if(touchx<-Math.abs(touchy)*PRM.pad_dia){Input._currentState['left']=true;Input._currentState['right']=false;}
                else{Input._currentState['left']=false;Input._currentState['right']=false;}
                if(touchy>Math.abs(touchx)*PRM.pad_dia){Input._currentState['down']=true;Input._currentState['up']=false;}
                else if(touchy<-Math.abs(touchx)*PRM.pad_dia){Input._currentState['up']=true;Input._currentState['down']=false;}
                else{Input._currentState['up']=false;Input._currentState['down']=false;}
            }
        }
        function disope() {
            touchx=0; touchy=0;
            Input._currentState['up']=false;
            Input._currentState['down']=false;
            Input._currentState['left']=false;
            Input._currentState['right']=false;
        }
        
        //-----------------------------------------------------------------------------
        // Locate_Button
    
        function Locate_Button() {
            this.initialize.apply(this, arguments);
        }
        Locate_Button.prototype.initialize = function(type) {
            var img = new Image();
            var url = PRM.url[type];
            img.onerror = function() {Graphics.printError('Button Image was Not Found:',url);};
            img.src = url;
            img = null;
            this.Div = document.createElement("div");
            this.Div.id = btn_id[type]+'Btn';
            this.Div.style.position = 'fixed';
            this.Div.style[PRM.spot[type][0].replace(/\s+/g, "")] = PRM.pos[type][0]+'px';
            this.Div.style[PRM.spot[type][1].replace(/\s+/g, "")] = PRM.pos[type][1]+'px';
            this.Div.style.width = PRM.size[type]+'px';
            this.Div.style.height = PRM.size[type]+'px';
            this.Div.style.opacity = PRM.opacity;
            this.Div.style.zIndex = '11';
            this.Div.style.userSelect="none";
            this.Div.style.background = 'url('+PRM.url[type]+') 0 0 / cover no-repeat';
            
            if(!Utils.isMobileDevice() && PRM.pcBtn){
                this.Div.addEventListener('mousedown', function() {
                    Input._currentState[btn_id[type]] = true;PressBtn=true;
                }, false);
                this.Div.addEventListener('mouseover', function() {
                  if(TouchInput.isPressed()){Input._currentState[btn_id[type]] = true;PressBtn=true;return false;}
                }, false);
                this.Div.addEventListener('mouseup', function() {
                  Input._currentState[btn_id[type]] = false;PressBtn=false;
                }, false);
                this.Div.addEventListener('mouseout', function() {
                  Input._currentState[btn_id[type]] = false;PressBtn=false;
                }, false);
            }
            
            this.Div.addEventListener('touchstart', function() {
                if (!SceneManager.isSceneChanging()){Input._currentState[btn_id[type]] = true;PressBtn=true;}
            }, false);
            this.Div.addEventListener('touchend', function() {
                Input._currentState[btn_id[type]] = false;PressBtn=false;
            }, false);
            
            document.body.appendChild(this.Div);
        };
    
        //-----------------------------------------------------------------------------
        // Replace function
        function show(){
            if (Utils.isMobileDevice() || PRM.pcBtn) {
                if(!Btn_ready){
                    Btn_ready=true;
                    if(PRM.visible[0]){SceneManager._scene.DirPad = new Locate_DirPad();}
                    if(PRM.visible[1]){SceneManager._scene.okButton = new Locate_Button(1);}
                    if(PRM.visible[2]){SceneManager._scene.canselButton = new Locate_Button(2);}
                    Graphics._updateRealScale();
                    document.documentElement.style["-webkit-user-select"]="none";
                    document.addEventListener("touchmove", function(evt) {evt.preventDefault();}, {passive: false});
                }
            }
        }
        var Scene_Base_start = Scene_Base.prototype.start;
        Scene_Base.prototype.start = function() {
                Scene_Base_start.call(this);
                show()
        };
    
            if(PRM.visible[0] || PRM.visible[1] || PRM.visible[2]){
                var Game_Temp_setDestination = Game_Temp.prototype.setDestination;
                Game_Temp.prototype.setDestination = function(x, y) {
                    Game_Temp_setDestination.apply(this, arguments);
                    if(PressBtn){
                        this._destinationX = null;
                        this._destinationY = null;
                    }
                };
            
                var Graphics_updateRealScale = Graphics._updateRealScale;
                Graphics._updateRealScale = function() {
                    Graphics_updateRealScale.call(this);
                    if (this._stretchEnabled) {
                        if(document.getElementById("Dirpad")){
                        if(window.innerWidth<window.innerHeight){current_zoom=hvzoom[1];}else{current_zoom=hvzoom[0];}
                        pad_size=pad_range*current_zoom/2;
                        if(PRM.visible[0]){
                                document.getElementById("Dirpad").style.zoom=current_zoom;
                                dirx=document.getElementById("Dirpad").offsetLeft*current_zoom;
                                diry=document.getElementById("Dirpad").offsetTop*current_zoom;
                        }
                        if(PRM.visible[1]){document.getElementById("okBtn").style.zoom=current_zoom;}
                        if(PRM.visible[2]){document.getElementById("escapeBtn").style.zoom=current_zoom;}
                        }
                    }
                };
        }
        
        //-----------------------------------------------------------------------------
        // Option
            // UCHU_MobileOperationからの改変が多い箇所
            
            //UCHU_MobileOperationの同名メソッドとほぼ同じ
            Scene_Base.prototype.hideUserInterface = function() {
                if (Utils.isMobileDevice() || PRM.pcBtn) {
                    Btn_hide = true;
                    //元々のUCHU_MobileOperationの処理
                    if(PRM.visible[0]){document.getElementById("Dirpad").style.zIndex = '0';}
                    if(PRM.visible[1]){document.getElementById("okBtn").style.zIndex = '0';}
                    if(PRM.visible[2]){document.getElementById("escapeBtn").style.zIndex = '0';}
                    if(PRM.hideBtnSwitch != 0){
                        //透明度をゼロにする処理
                        if(PRM.visible[0]){document.getElementById("Dirpad").style.opacity = '0';}
                        if(PRM.visible[1]){document.getElementById("okBtn").style.opacity = '0';}
                        if(PRM.visible[2]){document.getElementById("escapeBtn").style.opacity = '0';}
                    }
                }
            };
            
            //UCHU_MobileOperationの同名メソッドとほぼ同じ
            Scene_Base.prototype.showUserInterface = function() {
                if (Utils.isMobileDevice() || PRM.pcBtn) {
                    Btn_hide = false;
                    //元々のUCHU_MobileOperationの処理
                    if(PRM.visible[0]){document.getElementById("Dirpad").style.zIndex = '11';}
                    if(PRM.visible[1]){document.getElementById("okBtn").style.zIndex = '11';}
                    if(PRM.visible[2]){document.getElementById("escapeBtn").style.zIndex = '11';}
                    if(PRM.hideBtnSwitch != 0){
                        //透明度を設定値にする処理
                        if(PRM.visible[0]){document.getElementById("Dirpad").style.opacity = PRM.opacity;}
                        if(PRM.visible[1]){document.getElementById("okBtn").style.opacity = PRM.opacity;}
                        if(PRM.visible[2]){document.getElementById("escapeBtn").style.opacity = PRM.opacity;}                      
                    }
                }
            };
    
            //updateMainで表示状態をチェックする
            var dice2000_Scene_Map_updatemain = Scene_Map.prototype.updateMain;
            Scene_Map.prototype.updateMain = function() {
                dice2000_Scene_Map_updatemain.apply(this, arguments);
                //スイッチ番号が設定されている時
                if(PRM.hideBtnSwitch != 0){
                    //どの値で表示するかはPRM.hideBtnSwitchValue（真理値）による
                    //非表示状態にする
                    if($gameSwitches.value(PRM.hideBtnSwitch) != PRM.hideBtnSwitchValue){
                        //表示状態(Btn_hideがfalse)にメソッドを呼び、行き先でBtn_hideをtrueにする
                        if(!Btn_hide) this.hideUserInterface();
                    //表示状態にする
                    }else{
                        //非表示状態(Btn_hideがtrue)にメソッドを呼び、行き先でBtn_hideをfalseにする
                        if(Btn_hide) this.showUserInterface();
                    }
                //スイッチ番号が設定されておらず、HideButton OnMessageがtrueに設定されている時
                }else if(PRM.hideBtn){
                    //消去条件：メッセージウィンドウにテキストが存在する時＆スクロールモードでない時＆ウィンドウ位置が下の時
                    //ここの条件式を変えれば消すタイミングは変えられます
                    if($gameMessage.hasText() && !$gameMessage.scrollMode() && $gameMessage.positionType() == 2){
                        if(!Btn_hide) this.hideUserInterface();
                    }else{
                        if(Btn_hide) this.showUserInterface();
                    }
                }
            };
    
            var dice2000_Scene_Battle_update = Scene_Battle.prototype.update;
            Scene_Battle.prototype.update = function() {
                dice2000_Scene_Battle_update.apply(this, arguments);
                if(PRM.hideBtnSwitch != 0){
                    if($gameSwitches.value(PRM.hideBtnSwitch) != PRM.hideBtnSwitchValue){
                        if(!Btn_hide) this.hideUserInterface();
                    }else{
                        if(Btn_hide) this.showUserInterface();
                    }
                }else if(PRM.hideBtn){
                    if($gameMessage.hasText() && !$gameMessage.scrollMode() && $gameMessage.positionType() == 2){
                        if(!Btn_hide) this.hideUserInterface();
                    }else{
                        if(Btn_hide) this.showUserInterface();
                    }
                }
            };
    
        if(Utils.isMobileDevice() || PRM.pcExt){
            if(PRM.holdaction){
                var TouchInput_update = TouchInput.update;
                TouchInput.update = function() {
                    TouchInput_update.call(this);
                    if (!PressBtn && TouchInput.isLongPressed()) {
                        Input._currentState['ok']=true;autofire=true;
                    }
                    if(!TouchInput.isPressed() && autofire){
                        Input._currentState['ok']=false;autofire=false;
                    }
                };
            }
            
            if(PRM.flickpage || PRM.outcansel || PRM.outaction){
                TouchInput._endRequest= function(type) {
                    Input._currentState[type]=false;
                }
                if(Utils.isMobileDevice()){
                    var TouchInput_onTouchStart = TouchInput._onTouchStart;
                    TouchInput._onTouchStart = function(event) {
                        TouchInput_onTouchStart.apply(this, arguments);
                        var touch = event.changedTouches[0];
                        if(!PressBtn){
                            st_x = Graphics.pageToCanvasX(touch.pageX);
                            st_y = Graphics.pageToCanvasY(touch.pageY);
                            if(st_x<0 || st_y<0 || st_x>Graphics.boxWidth || st_y>Graphics.boxHeight){
                                if(PRM.outcansel){Input._currentState['escape']=true;setTimeout("TouchInput._endRequest('escape');", 100);}
                                if(PRM.outaction){Input._currentState['ok']=true;setTimeout("TouchInput._endRequest('ok');", 100);}
                            }
                        }
                    };
                }else{
                    var TouchInput_onLeftButtonDown = TouchInput._onLeftButtonDown;
                    TouchInput._onLeftButtonDown = function(event) {
                        TouchInput_onLeftButtonDown.apply(this, arguments);
                        if(!PressBtn){
                            st_x = Graphics.pageToCanvasX(event.pageX);
                            st_y = Graphics.pageToCanvasY(event.pageY);
                            if(st_x<0 || st_y<0 || st_x>Graphics.boxWidth || st_y>Graphics.boxHeight){
                                if(PRM.outcansel){Input._currentState['escape']=true;setTimeout("TouchInput._endRequest('escape');", 100);}
                                if(PRM.outaction){Input._currentState['ok']=true;setTimeout("TouchInput._endRequest('ok');", 100);}
                            }
                        }
                    };
                }
            }
                
            if(PRM.flickpage){
                var TouchInput_onMove = TouchInput._onMove;
                TouchInput._onMove = function(x, y) {
                    TouchInput_onMove.apply(this, arguments);
                    if(!PressBtn){
                        if((st_x-x)<-50 && Math.abs(st_y-y)<100){st_y=9999;Input._currentState['pageup']=true;setTimeout("TouchInput._endRequest('pageup');", 100);}
                        if((st_x-x)>50 && Math.abs(st_y-y)<100){st_y=9999;Input._currentState['pagedown']=true;setTimeout("TouchInput._endRequest('pagedown');", 100);}
                    }
                }
            }
        }
        
        //AnalogMove.js
        if(PRM.analogmove && Utils.isMobileDevice() || PRM.analogmove && PRM.pcBtn){
            Input.leftStick = function() {
                var threshold = 0.1;
                var x = touchx;
                var y = touchy;
                var tilt = Math.min(1,Math.sqrt(touchx*touchx+touchy*touchy)*PRM.sensitivity);
                var direction = 0.0;
                if (x === 0.0) {
                    direction = (-y > 0 ? Math.PI * 0.0 : Math.PI * 1.0);
                } else if (y === 0.0) {
                    direction = (-x > 0 ? Math.PI * 0.5 : Math.PI * 1.5);
                } else {
                    direction = Math.atan2(-x, -y);
                }
                return {tilt: tilt, direction: direction};
            };
        }
        if(SceneManager._scene) show()
    })();
    
}