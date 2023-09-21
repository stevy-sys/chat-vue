

<template>
  <body>
    <div class="container-fluid ">
      <div class="row justify-content-center h-100">
        <div class="col-md-4 col-xl-3 chat">
          <div class="card mb-sm-3 mb-md-0 contacts_card">
            <div class="card-header">
              <div class="row">
                <div class="col-8">
                  <div class="input-group">
                    <input type="text" placeholder="Search..." name="" class="form-control search">
                    <div class="input-group-prepend">
                      <span class="input-group-text search_btn"><i class="fas fa-search"></i></span>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <button @click="changeAction()" class="btn btn-danger">{{ action }}</button>
                </div>
              </div>


              <div class="d-flex justify-content-around mt-3 mb-1">
                <button @click="changeTypeConversation('prive')"
                  :class="typeConversation == 'prive' ? 'btn-primary' : 'btn-secondary'" class="btn">prive</button>
                <button @click="changeTypeConversation('groupe')"
                  :class="typeConversation == 'groupe' ? 'btn-primary' : 'btn-secondary'" class="btn">groupe</button>
              </div>
            </div>
            <div class="card-body contacts_body">
              <ul class="contacts">
                <!-- class active -->
                <div v-if="typeConversation == 'prive'">
                  <li :class="conversation.active ? 'active' : ''" @click="changeConversation(conversation)"
                    v-for="(conversation, index) in  conversationPrive">
                    <div class="d-flex bd-highlight">
                      <div class="img_cont">
                        <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                          class="rounded-circle user_img">
                        <span :class="!isConnected(conversation.talked.user) ? 'offline' : '' " class="online_icon"></span>
                      </div>
                      <div class="user_info">
                        <span>{{ conversation.talked.user.name }}</span>
                        <p class="lastMessage">{{ conversation.last_message.message }}</p>
                      </div>
                    </div>
                  </li>
                </div>
                <div v-else>
                  <li :class="conversation.active ? 'active' : ''" @click="changeConversation(conversation)"
                    v-for="(conversation, index) in  conversationGroupe">
                    <div class="d-flex bd-highlight">
                      <div class="img_cont">
                        <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                          class="rounded-circle user_img">
                        <span  class="online_icon"></span>
                        <!-- <span class="online_icon offline"></span> -->
                      </div>
                      <div class="user_info">
                        <span>{{ conversation.name }}</span>
                        <p class="lastMessage">{{ conversation.last_message.message }}</p>
                      </div>
                    </div>
                  </li>
                </div>
                <!--  -->
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xl-6 chat">
          <div class="card">
            <div v-if="action != 'new'" class="card-header msg_head">
              <div class="d-flex bd-highlight">
                <div class="img_cont">
                  <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img">
                  <span class="online_icon"></span>
                </div>
                <div v-if="conversationActive.type == 'prive'" class="user_info">
                  <span>{{ conversationActive.talked.user.name }}</span>
                  <p>{{ conversationActive.name }}</p>
                </div>
                <div v-else class="user_info">
                  <span>{{ conversationActive.name }}</span> <br>
                  <span v-for="(membre,index) in conversationActive.membres ">{{ membre.user.name }} ,</span>
                  <!-- <p>{{ conversationActive.name }}</p> -->
                </div>
                <div class="video_cam">
                  <span><i class="fas fa-video"></i></span>
                  <span><i class="fas fa-phone"></i></span>
                </div>
              </div>
              <span id="action_menu_btn"><i class="fas fa-ellipsis-v"></i></span>
              <div class="action_menu">
                <ul>
                  <li><i class="fas fa-user-circle"></i> View profile</li>
                  <li><i class="fas fa-users"></i> Add to close friends</li>
                  <li><i class="fas fa-plus"></i> Add to group</li>
                  <li><i class="fas fa-ban"></i> Block</li>
                </ul>
              </div>
            </div>
            <div class="card-body msg_card_body" ref="discussionContainer">
              <div v-if="action != 'new'">
                <div v-for="(discussion, index) in discussions">
                  <div v-if="discussion.user_id !== auth.id" class="d-flex justify-content-start mb-4">
                    <div class="img_cont_msg">
                      <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                        class="rounded-circle user_img_msg">
                    </div>
                    <div class="msg_cotainer">
                      {{ discussion.message }}
                      <span class="msg_time">8:40 AM, Today</span>
                    </div>
                  </div>
                  <div v-else class="d-flex justify-content-end mb-4">
                    <div class="msg_cotainer_send">
                      {{ discussion.message }}
                      <span class="msg_time_send">8:55 AM, Today</span>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="action == 'new'">
                <section class="section">
                  <div class="container">

                    <div class="row">
                      <div class="col-lg-12">
                        <div class="row">
                          <div class="col-lg-4">
                            <div class="input-group">
                              <input type="text" placeholder="Search..." name="" class="form-control search">
                              <div class="input-group-prepend">
                                <span class="input-group-text search_btn"><i class="fas fa-search"></i></span>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-8">
                            <div class="mt-2 mt-lg-0 d-flex flex-wrap align-items-start gap-1">
                              <span @click="addUser(user)" v-for="(user, index) in userSelected"
                                class="badge bg-soft-primary fs-14 m-1">{{ user.name }} X</span>
                            </div>
                          </div>

                        </div>
                        <div class="candidate-list">
                          <div v-for="(user, index) in allUsers" class="candidate-list-box card mt-4 mb-2">
                            <div class="p-4 card-body">
                              <div class="align-items-center row">
                                <div class="col-auto">
                                  <div class="candidate-list-images">
                                    <a href="#"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""
                                        class="avatar-md img-thumbnail rounded-circle" /></a>
                                  </div>
                                </div>
                                <div class="col-lg-5">
                                  <div class="candidate-list-content mt-3 mt-lg-0">
                                    <h5 class="fs-19 mb-0">
                                      <span>{{ user.name }}</span>
                                    </h5>
                                    <p class="text-muted mb-2">Project Manager</p>
                                  </div>
                                </div>

                              </div>
                              <div @click="addUser(user)" class="favorite-icon">
                                <a :class="verifUserSelected(user) ? 'checked-user' : ''" href="#"><i
                                    class="mdi mdi-heart fs-18"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="mt-4 pt-2 col-lg-12">

                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div class="card-footer">
              <div class="input-group">
                <div class="input-group-append">
                  <span class="input-group-text attach_btn"><i class="fas fa-paperclip"></i></span>
                </div>
                <textarea v-model="form.message" name="" class="form-control type_msg"
                  placeholder="Type your message..."></textarea>
                <div class="input-group-append">
                  <span @click="sendMessageTo()" class="input-group-text send_btn">Envoyer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-xl-3 chat">
          <div class="card mb-sm-3 mb-md-0 contacts_card">

            <div class="card-body friends">
              <ul class="photo">
                <img src="../assets/tsaty.jpg" class="photo-profile" alt="">
              </ul>
              <div @click="onUpdate()" class="desciption">
                <div v-if="update">
                  <div class="card-footer">
                    <div class="input-group">
                      <div class="d-flex">
                        <input v-model="auth.name" name="" class="m-2 form-control type_msg" placeholder="Nouveau nom" />
                        <textarea class="m-2 form-control type_msg" placeholder="nouveau description"> test </textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else>
                  <h3>{{ auth.name }}</h3>
                  <div>
                    Lorem ipsum dolor sit amet.
                  </div>
                </div>
              </div>
            </div>
            <div v-if="update" class="card-footer foot">
              <button @click="updateCompled()" class="btn-success">Modifier</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex'
import { getAllConversation, getAllMessage, sendMessage } from '../service/chat.service'
import { getUsers } from '../service/user.service';
import { echo } from '../config/echo';
const store = useStore()

const discussionContainer = ref(null);
const typeConversation = ref('prive');
const update = ref(false);
const conversationPrive = ref([]);
const conversationGroupe = ref([]);
const discussions = ref([]);
const conversationActive = ref(null);
const allUsers = ref([])
const userSelected = ref([])
const action = ref('new')
const form = ref({
  conversation_id: null,
  user_id: [],
  message: '',
  type: ''
})

const auth = computed(() => store.getters.getUser)

const onUpdate = () => {
  update.value = true;
}

const updateCompled = () => {
  update.value = false;
}
const initActiveConversation = () => {
  conversationPrive.value = conversationPrive.value.filter(element => {
    element.active = false
    return element
  })
  conversationGroupe.value = conversationGroupe.value.filter(element => {
    element.active = false
    return element
  })
}

const activeConversation = (conversation) => {
  conversationPrive.value = conversationPrive.value.filter(element => {
    if (element.id == conversation.id) {
      element.active = true
    }
    return element
  })
  conversationGroupe.value = conversationGroupe.value.filter(element => {
    if (element.id == conversation.id) {
      element.active = true
    }
    return element
  })
}

const verifUserSelected = (user) => {
  let exist = userSelected.value.filter(element => {
    return element.id == user.id
  })
  if (exist[0]) {
    return true
  }
  return false
}

const changeAction = async () => {
  console.log('test')
  if (action.value == 'new') {
    if (conversationPrive.value.length > 0) {
      await changeConversation(conversationPrive.value[0])
      action.value = await "existant"
    }
  } else {
    form.value.conversation_id = null
    action.value = await "new"
    conversationActive.value = await null
  }
}

const addUser = (user) => {
  let exist = verifUserSelected(user)
  if (exist) {
    userSelected.value = userSelected.value.filter(element => {
      return element.id !== user.id;
    })
  } else {
    userSelected.value.push(user)
  }
  form.value.user_id = userSelected.value
  if (userSelected.value.length > 1) {
    form.value.type = 'groupe'
  } else {
    form.value.type = 'prive'
  }
}

const reformatUserSelected = (users) => {
  let data = []
  users.forEach(user => {
    data.push(user.id)
  });
  return data
}
const isConnected = (user) => {
  let exist = store.getters.getUsersEnLigne.filter(element => {
    return element.id == user.id
  })
  return exist.length > 0 ? true : false 
}

onMounted(async () => {
  const response = await getAllConversation()
  const res = await getUsers()
  console.log(res)
  allUsers.value = res.user
  conversationPrive.value = response.conversationPrive
  conversationGroupe.value = response.conversationGroupe
  initActiveConversation()

});

echo.private('user-' + store.getters.getUser.id).listen('.newMessage', (e) => {
  console.log(e)
  if (conversationActive.value) {
    if (e.conversation.id == conversationActive.value.id) {
      discussions.value.push(e.message)
      scroolTo()
    }
  }

  if (e.conversation.type == 'prive') {
    if (isConversationPriveExiste(e.conversation)) {
      insereLastMessageInConversation(e.conversation.type,e.message,e.conversation)
    }else{
      conversationPrive.value.push(e.conversation)
    }
  }else{
    if (isConversationGroupeExiste(e.conversation)) {
      insereLastMessageInConversation(e.conversation.type,e.message,e.conversation)
    }else{
      conversationGroupe.value.push(e.conversation)
    }
  }
  reorganistaeConversation()
});

const isConversationPriveExiste = (conversation) => {
  let exist = conversationPrive.value.filter(con => {
    return conversation.id == con.id
  })
  return exist.length > 0 ? true : false;
}

const isConversationGroupeExiste = (conversation) => {
  let exist = conversationGroupe.value.filter(con => {
    return conversation.id == con.id
  })
  return exist.length > 0 ? true : false;
}

const searchUserConversation = (user,type,conversation=null) => {
  if (type == 'prive') {
    let exist = conversationPrive.value.filter(con => {
      return con.talked.user.id == user.id
    })
    return exist.length > 0 ? true : false;
  }else{
    let exist = conversationGroupe.value.filter(con => {
      return con.id == conversation.id
    })
    return exist.length > 0 ? true : false;
  }
}



const changeConversation = async (conversation) => {
  await initActiveConversation()
  await activeConversation(conversation)
  const response = await getAllMessage(conversation.id)
  discussions.value = response
  conversationActive.value = conversation
  action.value = await "existant"
  updateForm(conversation)
  scroolTo()
}

const updateForm = (conversation) => {
  form.value.conversation_id = conversation.id ? conversation.id : null
  form.value.user_id = []
  form.value.type = conversation.type
}

const changeTypeConversation = (type) => {
  typeConversation.value = type
}

const scroolTo = () => {
  const container = discussionContainer.value;
  const start = container.scrollTop;
  const end = container.scrollHeight;
  const duration = 500; // Durée de l'animation en millisecondes
  const startTime = performance.now();

  const animateScroll = (currentTime) => {
    const elapsedTime = currentTime - startTime;
    const position = easeInOut(elapsedTime, start, end - start, duration);
    container.scrollTop = position;

    if (elapsedTime < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  const easeInOut = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  requestAnimationFrame(animateScroll);
}


const sendMessageTo = async () => {
  if (form.value.message.length < 6) {
    return alert('message trop courte')
  }
  form.value.user_id = reformatUserSelected(userSelected.value)
  const response = await sendMessage(form.value)
  const convers = response.data.conversation;
  scroolTo()
  if (convers.type == 'prive') {
    if (searchUserConversation(convers.talked.user,'prive',convers)) {
      insereLastMessageInConversation('prive',response.data,convers)
    } else {
      conversationPrive.value.push(convers)
    }
  } else {
    if (searchUserConversation(convers.talked.user,'groupe',convers)) {
      insereLastMessageInConversation('groupe',response.data,convers)
    }else{
      conversationGroupe.value.push(convers)
    }
  }
  changeConversation(convers)
  discussions.value.push(response.data)
  reorganistaeConversation()
  form.value.message = ''
}

const insereLastMessageInConversation = (type,message,conversation) => {
  if (type == 'groupe') {
    conversationGroupe.value = conversationGroupe.value.filter(con => {
      if (con.id == conversation.id) {
        con.last_message = message
      }
      return con
    })
  }else{
    conversationPrive.value = conversationPrive.value.filter(con => {
        if (con.id == conversation.id) {
          con.last_message = message
        }
        return con
      })
  }
}

const reorganistaeConversation = () => {
  conversationPrive.value.sort((a, b) => {
    const dateA = new Date(a.last_message.created_at);
    const dateB = new Date(b.last_message.created_at);
    return dateB - dateA;
  });

  conversationGroupe.value.sort((a, b) => {
    const dateA = new Date(a.last_message.created_at);
    const dateB = new Date(b.last_message.created_at);
    return dateB - dateA;
  });
}
</script>

<style scoped>
@import '../assets/main.css';

.checked-user {
  background-color: red;
}

p.lastMessage {
  font-size: 15px !important;
}

.card-body.friends {
  text-align: center;
}

img.photo-profile {
  width: 63%;
  border-radius: 50%;
  margin-bottom: 21px;
}

.card-footer.foot {
  text-align: center;
}











.card {
  box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%);
}

.avatar-md {
  height: 5rem;
  width: 5rem;
}

.fs-19 {
  font-size: 19px;
}

.primary-link {
  color: #314047;
  -webkit-transition: all .5s ease;
  transition: all .5s ease;
}

a {
  color: #02af74;
  text-decoration: none;
}

.bookmark-post .favorite-icon a,
.job-box.bookmark-post .favorite-icon a {
  background-color: #da3746;
  color: #fff;
  border-color: danger;
}

.favorite-icon a {
  display: inline-block;
  width: 30px;
  height: 30px;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #eff0f2;
  border-radius: 6px;
  color: rgba(173, 181, 189, .55);
  -webkit-transition: all .5s ease;
  transition: all .5s ease;
}

.header-start {
  display: flex !important;
  justify-content: space-around;
}

.candidate-list-box {
  height: auto !important;
}

.candidate-list-box .favorite-icon {
  position: absolute;
  right: 22px;
  top: 22px;
}

.fs-14 {
  font-size: 14px;
}

.bg-soft-secondary {
  background-color: rgba(116, 120, 141, .15) !important;
  color: #ffffff !important;
}

.mt-1 {
  margin-top: 0.25rem !important;
}
</style>
