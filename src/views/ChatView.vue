

<template>
  <body>
    <div class="container-fluid ">
      <div class="row justify-content-center h-100">
        <div class="col-md-4 col-xl-3 chat">
          <div class="card mb-sm-3 mb-md-0 contacts_card">
            <div class="card-header">
              <div class="input-group">
                <input type="text" placeholder="Search..." name="" class="form-control search">
                <div class="input-group-prepend">
                  <span class="input-group-text search_btn"><i class="fas fa-search"></i></span>
                </div>
              </div>
            </div>
            <div class="card-body contacts_body">
              <ui class="contacts">
                <!-- class active -->
                <li @click="changeConversation(conversation)" v-for="(conversation,index) in  conversationPrive">
                  <div class="d-flex bd-highlight">
                    <div class="img_cont">
                      <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                        class="rounded-circle user_img">
                      <span class="online_icon"></span>
                    </div>
                    <div class="user_info">
                      <span>{{ conversation.talked.user.name }}</span>
                      <p class="lastMessage">{{ conversation.last_message.message }}</p>
                    </div>
                  </div>
                </li>
                <!-- <li>
                  <div class="d-flex bd-highlight">
                    <div class="img_cont">
                      <img
                        src="https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg"
                        class="rounded-circle user_img">
                      <span class="online_icon offline"></span>
                    </div>
                    <div class="user_info">
                      <span>Taherah Big</span>
                      <p>Taherah left 7 mins ago</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex bd-highlight">
                    <div class="img_cont">
                      <img src="https://i.pinimg.com/originals/ac/b9/90/acb990190ca1ddbb9b20db303375bb58.jpg"
                        class="rounded-circle user_img">
                      <span class="online_icon"></span>
                    </div>
                    <div class="user_info">
                      <span>Sami Rafi</span>
                      <p>Sami is online</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex bd-highlight">
                    <div class="img_cont">
                      <img src="http://profilepicturesdp.com/wp-content/uploads/2018/07/sweet-girl-profile-pictures-9.jpg"
                        class="rounded-circle user_img">
                      <span class="online_icon offline"></span>
                    </div>
                    <div class="user_info">
                      <span>Nargis Hawa</span>
                      <p>Nargis left 30 mins ago</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex bd-highlight">
                    <div class="img_cont">
                      <img src="https://static.turbosquid.com/Preview/001214/650/2V/boy-cartoon-3D-model_D.jpg"
                        class="rounded-circle user_img">
                      <span class="online_icon offline"></span>
                    </div>
                    <div class="user_info">
                      <span>Rashid Samim</span>
                      <p>Rashid left 50 mins ago</p>
                    </div>
                  </div>
                </li> -->
              </ui>
            </div>
          </div>
        </div>


        <div v-if="conversationActive" class="col-md-4 col-xl-6 chat">
          <div class="card">
            <div class="card-header msg_head">
              <div class="d-flex bd-highlight">
                <div class="img_cont">
                  <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img">
                  <span class="online_icon"></span>
                </div>
                <div class="user_info">
                  <span>{{ conversationActive.talked.user.name }}</span>
                  <p>{{ conversationActive.name }}</p>
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
            <div class="card-body msg_card_body">
              <div v-for="(discussion,index) in discussions">
                <div v-if="discussion.user_id !== auth.id"  class="d-flex justify-content-start mb-4">
                  <div class="img_cont_msg">
                    <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                      class="rounded-circle user_img_msg">
                  </div>
                  <div class="msg_cotainer">
                    {{discussion.message}}
                    <span class="msg_time">8:40 AM, Today</span>
                  </div>
                </div>
                <div v-else class="d-flex justify-content-end mb-4">
                  <div class="msg_cotainer_send">
                    {{discussion.message}}
                    <span class="msg_time_send">8:55 AM, Today</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <div class="input-group">
                <div class="input-group-append">
                  <span class="input-group-text attach_btn"><i class="fas fa-paperclip"></i></span>
                </div>
                <textarea v-model="form.message" name="" class="form-control type_msg" placeholder="Type your message..."></textarea>
                <div class="input-group-append">
                  <span @click="sendMessageTo()" class="input-group-text send_btn"><i class="fas fa-location-arrow"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-xl-3 chat">
          <div class="card mb-sm-3 mb-md-0 contacts_card">

            <div class="card-body friends">
              <ui class="photo">
                <img src="../assets/tsaty.jpg" class="photo-profile" alt="">
              </ui>
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
import { getAllConversation, getAllMessage ,sendMessage } from '../service/chat.service'
const store = useStore()

const update = ref(false);
const conversationPrive = ref([]);
const conversationGroupe = ref([]);
const discussions = ref([]);
const conversationActive = ref(null);
const form = ref({
  conversation_id:null,
  user_id:[],
  message:'',
  type:''
})

const auth = computed(() => store.getters.getUser)

const onUpdate = () => {
  update.value = true;
}

const updateCompled = () => {
  update.value = false;
}

onMounted(async () => {
  let response = await getAllConversation()
  conversationPrive.value = response.data.conversationPrive
  conversationGroupe.value = response.data.conversationGroupe
});

const changeConversation = async (conversation) => {
  const response = await getAllMessage(conversation.id)
  discussions.value = response.data
  conversationActive.value = conversation

  updateForm(conversation)
  
}

const updateForm = (conversation) => {
  let user = []
  conversation.membres.forEach(element => {
    user.push(element.user_id)
  });
  form.value.conversation_id = conversation.id ? conversation.id : null
  form.value.user_id = user
  form.value.type = conversation.type
}

const sendMessageTo = async () => {
  const response = await sendMessage(form.value)
  console.log(response)
}
</script>

<style scoped>
@import '../assets/main.css';

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
</style>
