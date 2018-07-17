Search.setIndex({docnames:["api","client","client/jobs","client/messages","contributing","exceptions","index","jobmanager","poller","protocol","receiver","router","sender","settings_file","using","utils/classes","utils/devices","utils/index","utils/messages","utils/settings","utils/timeutils"],envversion:50,filenames:["api.rst","client.rst","client/jobs.rst","client/messages.rst","contributing.rst","exceptions.rst","index.rst","jobmanager.rst","poller.rst","protocol.rst","receiver.rst","router.rst","sender.rst","settings_file.rst","using.rst","utils/classes.rst","utils/devices.rst","utils/index.rst","utils/messages.rst","utils/settings.rst","utils/timeutils.rst"],objects:{"eventmq.client":{jobs:[2,0,0,"-"],messages:[3,0,0,"-"]},"eventmq.client.jobs":{Job:[2,1,1,""],job:[2,4,1,""],schedule:[2,4,1,""],unschedule:[2,4,1,""]},"eventmq.client.jobs.Job":{__init__:[2,2,1,""],__weakref__:[2,3,1,""]},"eventmq.client.messages":{defer_job:[3,4,1,""],schedule:[3,4,1,""],send_request:[3,4,1,""],send_schedule_request:[3,4,1,""]},"eventmq.exceptions":{CallableFromPathError:[5,5,1,""],ConnectionError:[5,5,1,""],EventMQError:[5,5,1,""],InvalidMessageError:[5,5,1,""],MessageError:[5,5,1,""],NoAvailableWorkerSlotsError:[5,5,1,""],PeerGoneAwayError:[5,5,1,""],UnknownQueueError:[5,5,1,""]},"eventmq.jobmanager":{JobManager:[7,1,1,""]},"eventmq.jobmanager.JobManager":{__init__:[7,2,1,""],check_worker_health:[7,2,1,""],concurrent_jobs:[7,3,1,""],handle_response:[7,2,1,""],jobmanager_main:[7,2,1,""],jobs_in_flight:[7,3,1,""],name:[7,3,1,""],on_heartbeat:[7,2,1,""],on_request:[7,2,1,""],outgoing:[7,3,1,""],pid_distribution:[7,3,1,""],premature_death:[7,2,1,""],queues:[7,3,1,""],send_ready:[7,2,1,""],send_reply:[7,2,1,""],total_ready_sent:[7,3,1,""],total_requests:[7,3,1,""],worker_death:[7,2,1,""],worker_done:[7,2,1,""],worker_done_with_reply:[7,2,1,""]},"eventmq.poller":{Poller:[8,1,1,""]},"eventmq.poller.Poller":{__init__:[8,2,1,""],poll:[8,2,1,""],register:[8,2,1,""],unregister:[8,2,1,""]},"eventmq.receiver":{Receiver:[10,1,1,""]},"eventmq.receiver.Receiver":{__init__:[10,2,1,""],connect:[10,2,1,""],listen:[10,2,1,""],name:[10,3,1,""],ready:[10,3,1,""],unbind:[10,2,1,""],zcontext:[10,3,1,""],zsocket:[10,3,1,""]},"eventmq.router":{Router:[11,1,1,""]},"eventmq.router.Router":{add_scheduler:[11,2,1,""],add_worker:[11,2,1,""],clean_up_dead_schedulers:[11,2,1,""],clean_up_dead_workers:[11,2,1,""],get_available_worker:[11,2,1,""],get_status:[11,2,1,""],job_latencies:[11,3,1,""],on_disconnect:[11,2,1,""],on_heartbeat:[11,2,1,""],on_inform:[11,2,1,""],on_ready:[11,2,1,""],on_reply:[11,2,1,""],on_request:[11,2,1,""],prioritize_queue_list:[11,6,1,""],process_client_message:[11,2,1,""],process_worker_message:[11,2,1,""],queues:[11,3,1,""],received_disconnect:[11,3,1,""],requeue_worker:[11,2,1,""],reset_heartbeat_counters:[11,2,1,""],router_main:[11,2,1,""],scheduler_queue:[11,3,1,""],schedulers:[11,3,1,""],send_ack:[11,2,1,""],send_heartbeat:[11,2,1,""],send_schedulers_heartbeats:[11,2,1,""],send_workers_heartbeats:[11,2,1,""],sighup_handler:[11,2,1,""],start:[11,2,1,""],waiting_messages:[11,3,1,""],workers:[11,3,1,""]},"eventmq.sender":{Sender:[12,1,1,""]},"eventmq.sender.Sender":{__init__:[12,2,1,""],connect:[12,2,1,""],listen:[12,2,1,""],name:[12,3,1,""],ready:[12,3,1,""],rebuild:[12,2,1,""],unbind:[12,2,1,""],zcontext:[12,3,1,""],zsocket:[12,3,1,""]},"eventmq.utils":{classes:[15,0,0,"-"],devices:[16,0,0,"-"],messages:[18,0,0,"-"],random_characters:[17,4,1,""],settings:[19,0,0,"-"],timeutils:[20,0,0,"-"],tuplify:[17,4,1,""]},"eventmq.utils.classes":{EMQPService:[15,1,1,""],EMQdeque:[15,1,1,""],HeartbeatMixin:[15,1,1,""],ZMQReceiveMixin:[15,1,1,""],ZMQSendMixin:[15,1,1,""]},"eventmq.utils.classes.EMQPService":{__weakref__:[15,3,1,""],is_heartbeat_enabled:[15,3,1,""],on_ack:[15,2,1,""],process_message:[15,2,1,""],reset:[15,2,1,""],send_inform:[15,2,1,""],start:[15,2,1,""]},"eventmq.utils.classes.EMQdeque":{__init__:[15,2,1,""],__weakref__:[15,3,1,""],append:[15,2,1,""],appendleft:[15,2,1,""],extend:[15,2,1,""],is_empty:[15,2,1,""],is_full:[15,2,1,""],is_pfull:[15,2,1,""],peek:[15,2,1,""],peekleft:[15,2,1,""],pop:[15,2,1,""],popleft:[15,2,1,""],remove:[15,2,1,""]},"eventmq.utils.classes.HeartbeatMixin":{__init__:[15,2,1,""],__weakref__:[15,3,1,""],is_dead:[15,2,1,""],reset_heartbeat_counters:[15,2,1,""],send_heartbeat:[15,2,1,""]},"eventmq.utils.classes.ZMQReceiveMixin":{__weakref__:[15,3,1,""],recv:[15,2,1,""],recv_multipart:[15,2,1,""]},"eventmq.utils.classes.ZMQSendMixin":{__weakref__:[15,3,1,""],send:[15,2,1,""],send_multipart:[15,2,1,""]},"eventmq.utils.devices":{generate_device_name:[16,4,1,""]},"eventmq.utils.messages":{fwd_emqp_router_message:[18,4,1,""],generate_msgid:[18,4,1,""],parse_message:[18,4,1,""],parse_router_message:[18,4,1,""],send_emqp_message:[18,4,1,""],send_emqp_router_message:[18,4,1,""]},"eventmq.utils.settings":{import_settings:[19,4,1,""]},"eventmq.utils.timeutils":{IntervalIter:[20,1,1,""],monotonic:[20,4,1,""],seconds_until:[20,4,1,""],timestamp:[20,4,1,""]},"eventmq.utils.timeutils.IntervalIter":{__init__:[20,2,1,""],__weakref__:[20,3,1,""]},eventmq:{client:[1,0,0,"-"],exceptions:[5,0,0,"-"],jobmanager:[7,0,0,"-"],poller:[8,0,0,"-"],receiver:[10,0,0,"-"],router:[11,0,0,"-"],sender:[12,0,0,"-"],utils:[17,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","exception","Python exception"],"6":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:exception","6":"py:classmethod"},terms:{"0mq":[9,15],"5min":20,"abstract":9,"boolean":15,"case":[9,13,15,20],"class":[0,2,3,7,8,10,11,12,17,20],"default":[2,3,7,9,10,11,12,13,15],"float":[15,20],"function":[2,3,7,11,19],"import":[2,3,4,7,11,13,19],"int":[2,3,7,8,9,11,15,20],"long":[8,15],"new":[11,15],"public":9,"return":[2,3,4,7,8,10,11,12,15,16,17,18,20],"short":11,"true":[2,9,10,11,12,15],"try":13,"var":13,"while":9,FOR:9,For:[13,15],NOT:9,The:[2,3,7,8,9,10,11,12,13,14,15,18],There:11,These:5,Use:4,Used:[3,11],Useful:[7,15,18],Using:6,Will:13,With:13,__init__:[2,7,8,10,12,15,20],__weakref__:[2,15,20],_empty_:9,_headers_:9,_msg_:9,_msgid_:9,_queue_name_:9,_queues_:9,_recipient_id:15,_topic_name_:9,_unix_ts_:9,abl:[11,13],about:[7,9,11],absolut:4,accept:[9,13,15],account:[11,18],ack:[9,11],ackd_msgid:15,acknowledg:[7,9,11],across:9,act:[1,9],actual:[7,11],add:11,add_schedul:11,add_work:11,added:15,adding:15,addit:7,addr:[10,12,15],address:[2,7,10,11,12,13,14],administrative_addr:11,after:[9,13],agre:9,ahead:13,all:[2,3,5,7,9,10,11,12,13,15],allow:9,alpha:9,alreadi:11,also:[15,19],alwai:3,amount:13,and_data:18,ani:[3,7,9,11,13,14,17,19],announc:11,anoth:[7,11,13],anyth:13,api:[6,9],app:[2,15],appear:8,append:[13,15],appendleft:15,appened:11,appli:19,applic:[2,3,9,13,14],arg2:3,arg3:3,arg:[2,3,7,8,10,11,12,15],argument:15,arithmet:20,arrai:9,as_str:2,ascii:16,assign:13,assum:20,async:2,attempt:[5,11,13],attr:8,automat:15,avail:[5,11],available_slot:11,awaiting_ack:15,back:[9,11,15],backend_addr:11,backward:15,base:[5,8,13,15],basi:9,becaus:[11,15],becom:13,been:[3,11,15],befor:[3,7,8,9],begin:[11,13,15,20],being:8,belong:11,below:9,best:3,between:[9,20],block:13,bool:[2,3,7,10,12,15],boot:20,both:[8,9],box:13,broadcast:9,broker:[2,7,9,13,14,15],broker_addr:[2,7],buffer:11,build:[11,12],built:9,bulid:10,calabl:[2,3],calcul:20,call:[7,8,11,15],callabl:[2,3,5,7,10,13],callable_nam:5,callablefrompatherror:5,callback:[7,15],can:[1,2,3,7,9,11,13,14,15,16,18],captur:15,care:16,caus:[7,16],certain:15,chang:9,charact:17,check:[7,10,12,15],check_worker_health:7,choos:13,circuit:11,class_arg:[2,3,7],class_kwarg:[2,3,7],classmethod:11,clean:[7,9],clean_up_dead_schedul:11,clean_up_dead_work:11,clear:11,cli:11,client:[0,6,11,13],clock:20,close:[15,20],code:[4,6,15],collect:15,colon:3,com:2,come:[3,11],comma:[9,13],command:[3,7,9,11,15,18],compat:15,complet:[7,9],compon:9,concurr:13,concurrent_job:7,conf:[6,14],config:13,configur:[3,11,19],connction:[10,12],connect:[5,7,9,10,11,12,13,14,15,18],connectionerror:5,consist:9,construct:5,contact:5,contain:[1,7,9,11,13,15,17],content:13,context:[10,12,13],contribut:6,control:13,contruct:15,convers:9,convert:[13,17],convienc:[8,15],core:13,correct:13,count:[7,9,11,20],counter:[11,15],cpu:13,creat:[2,11,12,13,17],cron:[2,3],csv:9,current:[7,10,11,12,13,15],custom:[11,13],cycl:13,data:[11,18],data_process:13,databas:13,dead:7,deal:17,dealer:12,death:[7,15],debounc:3,debounce_deferred_job:3,debounce_sec:3,debug:[9,13],decor:2,decsend:11,def:2,defeat:9,defer:[2,3],defer_job:3,defin:[2,3,7,9,10,12,13,15,19,20],deliv:9,denot:[2,3],depth:11,dequ:15,describ:9,descript:9,desir:7,detail:[7,9],detect:9,determin:9,devic:[0,8,15,17,18],dialog:9,dict:[2,3,7,8],dictionari:[7,8,9,11],die:11,died:[7,15],differ:4,directli:[8,15],directori:13,disabl:[3,13],disconnect:[10,11],disk:13,distribut:9,document:9,doe:15,doesn:8,don:[7,9],dot:3,down:[13,20],dst:20,duplic:11,dure:12,each:11,effici:13,effort:3,either:[9,15],elaps:9,element:[11,15],els:[4,9],email:[2,9,13],emit:2,empti:[9,18],emq:11,emq_broker_addr:[2,14],emqdequ:15,emqp:[15,18],emqpservic:15,enabl:[2,3,13,15],encod:16,encount:[3,5],end:[3,15],ensur:[2,3,7,9,15],entri:11,environ:[2,6,13,19],equal:13,error:[2,3,5,13,15,16],etc:[11,13],evalu:3,even:9,event:[8,15],eventmq:[1,2,3,5,7,8,10,11,12,15,16,17,18,19,20],eventmq_:13,eventmq_config_fil:13,eventmq_max_socket:13,eventmqerror:5,everi:[2,3,7],everyth:16,exampl:[11,13,15,20],excecut:11,except:[0,3,4,6,9,10,12],exectu:11,execut:[2,3,7,9,13,20],executed_funct:[],exist:[5,7],exit:13,expect:13,explicitli:[13,15],expos:7,extend:15,extra:9,fail:[3,5,9],failur:3,fair:9,fals:[2,3,9,10,12,13,15],featur:16,few:4,field:9,file:[13,19],filenam:13,find:15,finish:[7,9,11],first:[9,11,15,18],fit:9,flag:[3,8],flight:7,follow:[3,9,15],foobar:2,form:15,format:[2,3,7,9,11,18],forward:[11,15,18],found:[5,11],foundat:9,frame:[11,15,18],free:9,from:[2,5,7,8,9,10,11,12,13,15,19,20],frontend_addr:11,fuction:3,full:15,func:[2,3,7,15],function_nam:11,fwd_emqp_router_messag:18,gener:[7,8,9,10,12,18],generate_device_nam:16,generate_msgid:18,get:11,get_available_work:11,get_statu:11,give:3,given:[2,11,13],global:[14,19],gmail:2,gnu:9,goe:7,good:15,gotten:20,gracefulli:13,group:13,guarante:[2,3,9],guarente:3,hand:17,handl:[7,9,11,15],handle_respons:7,handler:7,happen:[3,8,11,12],hard:15,has:[9,11,15],hasn:11,have:[3,13,15,18],haven:11,header:[2,3],heartbeat:[7,11,15,20],heartbeat_timeout:11,heartbeati:15,heartbeatmixin:15,heavi:9,help:13,helper:[0,1,15],here:[7,9,11],highest:13,hit:15,hope:9,hostnam:13,how:[3,8],html:9,http:9,ident:[9,16],identifi:11,ids:18,ietf:9,ignor:[9,15],immedi:[3,9],immediatli:3,implement:[9,15],impli:9,import_set:19,includ:[3,9,15],index:[6,11],indexerror:11,indic:7,indiviud:13,infinit:3,inform:[2,3,7,9,11,15],inherit:5,ini:[13,19],initi:[3,15],input:7,insert:[9,15],instal:4,instanc:7,instanti:[3,7],instead:9,integ:11,intens:13,interest:17,intern:5,interpret:9,interv:[2,3,9,20],interval_sec:[2,3,20],intervalit:20,invalidmessageerror:[5,11],is_dead:15,is_empti:15,is_ful:15,is_heartbeat_en:15,is_pful:15,isn:[11,15],issu:[4,6,9],item:15,iter:[8,11,15],iterat:15,its:7,itself:11,job:[0,1,3,5,6,9,11,14,15],job_lat:11,job_schedul:3,jobmanag:[0,6,9,11,15],jobmanager_main:7,jobs_in_flight:7,json:[2,3,7,13],keep:[7,11],kei:[7,8,9,11],kick:[7,11],kill:[3,9],know:[3,7,11],kwarg2:3,kwarg:[2,3,7,8,10,11,12,15],larg:13,larger:13,largest:11,last:[3,11,15],last_recv_heartbeat:11,lataneci:11,latenc:11,later:9,least:[9,15],leav:[9,13],left:15,length:[15,17],lesser:9,let:9,level:13,like:[7,13,15,17],limit:15,list:[2,3,5,7,9,11,13,15,17,20],listen:[7,10,11,12,13,15],load:13,local:13,localhost:13,locat:[3,13],log:[3,7,11,13],logic:[7,11],login:2,longer:[5,13],look:15,loop:[8,11,15],lot:13,lower:11,mai:[9,11,15],main:7,make:17,malform:5,manag:[0,5,6,11,14,15],mani:[3,9,12],manual:9,master:9,match:15,max:13,mean:3,measur:11,member:11,memebership:11,memori:13,merchant:9,mess:20,messag:[0,1,2,5,7,9,10,11,12,13,15,17],message_bodi:18,message_id:18,messageerror:5,met:15,meta:[11,18],method:[3,7,8,11,15],mime:2,mimetext:2,minut:[2,3],model:13,modifi:9,modul:[1,6,7,17],monitor:7,monoton:[11,15,20],more:[2,3,9,15,17],most:[13,15],msg:[2,7,9,11,15,18],msgid:[7,11,15],multipart:[9,15],multiprocess:[7,13],multiprocesswork:13,must:[2,3,7,9,13,15],name:[2,3,7,9,10,11,12,13,19],natur:7,necessari:7,need:[11,12],network:5,never:[9,20],next:[7,8,11,13,20],noavailableworkerslotserror:[5,11],nohast:9,none:[2,3,7,10,11,12,15,16,18],noop:7,normal:15,note:[7,10,12],notifi:[7,15],now:15,number:[3,7,11,13,20],numer:20,obj:11,object:[2,8,15,17,20],occur:15,off:[7,11],on_ack:15,on_command:[11,15],on_disconnect:11,on_emqp_command:15,on_ful:15,on_heartbeat:[7,11],on_inform:11,on_readi:11,on_recv:10,on_repli:11,on_request:[7,11],on_schedul:15,onc:9,one:[1,2,3,10,11,12],onli:13,onlin:[11,15],open:7,oper:13,option:[3,7,9,10,12,13,18],order:11,org:9,orient:9,origin:9,original_msg:11,other:[3,9,13],otherwis:[7,10,12,13,15],our:7,out:[7,9,15],outgo:[7,15],overrid:19,own:15,page:6,param:3,paramet:[2,3,7,8,10,11,12,15,16,17,18,19,20],pars:[11,15,18],parse_messag:18,parse_router_messag:18,part:[9,18],particular:[2,9,12],pass:[2,3,9,10,15],password:[2,13],path:[2,3,5,7,13],payload:18,peek:15,peekleft:15,peer:[5,9,15],peergoneawayerror:[5,11],pend:9,per:11,period:2,permiss:13,persist:13,pfull:15,pictur:9,pid:7,pid_distribut:7,pid_of_worker_process:7,placehold:[7,11],point:13,poll:8,poller:[0,6,15],pollin:8,pollout:8,pool:[7,9,11],pop:[11,15],popleft:15,port:[11,13],portion:7,possibl:4,practic:15,prefix:[13,16,18],premature_death:7,prepar:11,prepend:9,pretti:9,priorit:11,prioriti:11,prioritiess:11,prioritize_queue_list:11,problem:5,process:[7,9,11,12,13,15],process_client_messag:11,process_messag:[7,15],process_worker_messag:11,programm:15,proper:15,properti:[10,12,15],protocol:[4,6,15],protocol_vers:15,provid:[2,11,15],pub:9,pull:13,purpos:9,push_notif:15,py2:20,py3:20,python3:16,python:15,queue:[2,3,5,7,9,11,15],queue_nam:11,quit:2,rais:[2,3,5,10,11,12,15,18],random:[17,18],random_charact:17,raw:15,read:19,readi:[7,9,10,11,12,13,15],rebind:11,rebuild:12,receiv:[0,3,4,6,7,9,11,12,13,15],received_disconnect:11,recent:[9,11],recipi:[2,11,15,18],recipient_id:18,recommend:[9,13,15],reconnect:12,recreat:7,recurs:[11,17],recus:11,recv:15,recv_multipart:15,redi:13,redistribut:9,refer:[2,7,9,15,20],regist:[7,8,11],regular:9,reject:15,rel:4,reliabl:9,reload:11,remain:8,remot:15,remov:[7,9,11,15],reopen:15,rep:10,replac:[7,13],replai:13,repli:[2,3,7,9,11,18],reply_request:3,repres:20,req:12,request:[1,3,7,9,11,15],request_queu:[],requeue_work:11,requir:[9,13],reset:[11,15],reset_heartbeat_count:[11,15],resourc:[7,9],resp:7,respond:[9,11,15],respons:[7,10,11,12],restart:[9,12],retri:[3,9,11],retry_count:3,return_valu:7,rfc2119:9,rfc:9,right:15,robin:9,roughli:12,round:9,rout:[9,11],router:[0,6,7,10,14,15,18],router_main:11,run:[2,3,7,9,11,13,15],safe:13,sake:20,same:12,sampl:7,save:13,schedul:[2,3,11,14,15],scheduler_id:11,scheduler_queu:11,scheduler_zmq_id:11,search:6,sec:3,second:[3,9,20],seconds_until:20,section:19,see:[2,3,8,9,11,15],self:[7,11,12,15],semi:[],send:[2,3,5,7,9,11,12,15,18],send_ack:11,send_email:2,send_emqp_messag:18,send_emqp_router_messag:18,send_heartbeat:[11,15],send_inform:15,send_multipart:15,send_readi:7,send_repli:7,send_request:3,send_schedule_request:3,send_schedulers_heartbeat:11,send_workers_heartbeat:11,sender:[0,6,11],sender_id:18,sendmail:2,sent:[2,3,7,9,11,13,15],seper:[3,9,13],serial:[7,11],serializ:[2,3],serv:9,server:[6,7,9,14],servic:[5,7,9,15],service_typ:15,set:[0,2,6,7,8,9,11,12,14,15,16,17],setup:[],shall:9,should:[2,3,5,8,9,10,11,12,13,14,15,18],shown:9,sighup:11,sighup_handl:11,signal:7,signifi:13,signum:11,similar:13,simpl:[11,17],sinc:20,singl:[9,15],size:15,skip:[12,15],skip_sign:7,skip_zmqstream:12,slot:[7,11],slow:13,smaller:13,smtp:2,smtplib:2,socket:[3,8,9,10,11,12,13,15,16,18],softwar:9,some:[3,7,13,15,17,18],some_uuid:7,someon:9,someth:[3,12,13,15,20],somewher:4,sourc:[4,6],spawn:[7,13],specif:[4,6],specifi:[9,13,15,17],standard:13,start:[7,10,11,12,13,15,20],start_valu:20,stat:7,state:[11,13,15],statement:13,statu:9,still:[2,11,13],stop:[2,9],store:11,str:[2,3,7,10,11,12,15,16,17,18,19],string:[2,3,7,9,10,11,12,13,15,16,18],structur:5,style:13,sub:9,subclass:5,subcmd:7,subcommand:[3,7],subject:[2,9],subset:9,subtract:20,success:9,successfulli:15,support:[13,15],synchron:2,system:[4,11],tabl:9,take:[11,12,15,16,18],task:[2,3,7,13],tcp:[11,13],tell:7,term:9,test:[2,7],text:2,thei:[3,15],them:[7,10,13],thi:[1,2,3,5,7,8,9,10,11,12,13,15,16,17,18,19,20],thier:[],thing:[3,7,12,13,15,17,18],thread:13,threshold:15,through:[9,11],thrown:13,time:[0,3,9,11,13,15,17],timeout:[3,8,9],timestamp:[9,11,20],timeutil:[0,15,17],tip:4,tool:9,topic:9,total:7,total_ready_s:7,total_request:7,trace:9,track:[7,11,15],tri:3,tune:13,tupl:[7,8,11,15,17,18],tuplifi:17,type:[2,3,9,10,11,12,13,15,17,18],type_:15,typecast:8,typeerror:[2,3,10],unabl:11,unbind:[10,12],undefin:[2,8],under:9,unicod:16,uniqu:[7,9,11],unit:[2,7],unix:9,unknownqueueerror:[5,11],unless:[7,10,12],unprioritized_iter:11,unregist:8,unschedul:[2,3,9],until:[13,20],untouch:[11,18],unus:9,updat:15,upon:9,upper:13,upstream:7,usag:[2,20],use:[2,3,4,9,10,11,12,13,14,15,18],used:[1,2,3,9,10,11,12,13,15,16,18],useful:[2,9,12,13,20],uses:[7,13],using:[2,3,8,13,14,15,20],usual:[15,20],util:[0,6,20],utilit:[0,17],utlitii:15,uuid:[7,10,11,12],valid:[9,13],valu:[2,3,7,8,9,11,15,17,18,19,20],valueerror:15,variabl:[2,6,13,15,19],verbos:13,version:[4,9,15],via:[3,13,20],wait:[3,8,13],waiting_messag:11,walk:7,want:[2,9,13,15],warn:[2,11],warranti:9,weak:[2,15,20],web:9,weight:[9,13,15],well:[7,9],what:7,when:[1,2,3,4,5,7,9,10,11,12,13,15,16],where:[3,9,11,15,20],which:[3,7,9,11,13,15,16],who:[1,11],wish:18,without:[9,12],word:9,work:[4,7,15],worker:[2,3,5,7,11,13,15],worker_death:7,worker_don:7,worker_done_with_repli:7,worker_id:11,worri:9,would:[13,15,20],wrap:[],wrapper:[],write:13,you:[2,4,9,11,12,13,15,18],your:[3,9,13,15],zcontext:[10,12],zeromq:9,zmq:[8,9,10,11,12,15,16,18],zmqreceivemixin:15,zmqsendmixin:15,zmqstream:12,zsocket:[10,12]},titles:["API Documentation","<code class=\"docutils literal\"><span class=\"pre\">client</span></code> &#8211; Client Utilities","<code class=\"docutils literal\"><span class=\"pre\">jobs</span></code> &#8211; Client Job Helpers","<code class=\"docutils literal\"><span class=\"pre\">messages</span></code> &#8211; Client Messaging","Contributing to EventMQ","<code class=\"docutils literal\"><span class=\"pre\">exceptions</span></code> &#8211; Exceptions","EventMQ Documentation","<code class=\"docutils literal\"><span class=\"pre\">jobmanager</span></code> &#8211; Job Manager","<code class=\"docutils literal\"><span class=\"pre\">poller</span></code> &#8211; Poller","EventMQ Protocol Specification","<code class=\"docutils literal\"><span class=\"pre\">receiver</span></code> &#8211; Receiver","<code class=\"docutils literal\"><span class=\"pre\">router</span></code> &#8211; Router","<code class=\"docutils literal\"><span class=\"pre\">sender</span></code> &#8211; Sender","Server Settings (eventmq.conf)","Using EventMQ","<code class=\"docutils literal\"><span class=\"pre\">classes</span></code> &#8211; Utility Classes","<code class=\"docutils literal\"><span class=\"pre\">devices</span></code> &#8211; Device Utilities","<code class=\"docutils literal\"><span class=\"pre\">utils</span></code> &#8211; Utilities","<code class=\"docutils literal\"><span class=\"pre\">messages</span></code> &#8211; Message Utilities","<code class=\"docutils literal\"><span class=\"pre\">settings</span></code> &#8211; Settings Utilities","<code class=\"docutils literal\"><span class=\"pre\">timeutils</span></code> &#8211; Time Utilites"],titleterms:{"class":15,Using:14,address:9,api:0,architectur:9,backend_addr:13,client:[1,2,3,9,14],concurrent_job:13,conf:13,contribut:4,devic:16,disconnect:9,document:[0,6],emqp:9,environ:14,eventmq:[4,6,9,13,14],except:5,frame:9,frontend_addr:13,global:[9,13],goal:9,header:9,heartbeat:9,helper:2,indic:6,job:[2,7,13],jobmanag:7,kbai:9,languag:9,licens:9,manag:[7,13],max_job_count:13,max_socket:13,messag:[3,18],poller:8,protocol:9,publish:9,queue:13,receiv:10,router:[9,11,13],rq_db:13,rq_host:13,rq_password:13,rq_port:13,schedul:[9,13],scheduler_addr:13,sender:12,server:13,set:[13,19],setup_callab:13,setup_path:13,specif:9,super_debug:13,tabl:6,time:20,timeutil:20,topolog:9,util:[1,15,16,17,18,19],utilit:20,variabl:14,wal:13,wal_en:13,worker:9}})