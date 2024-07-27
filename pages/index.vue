<template>
    <div>
        <form
            @submit.prevent="onSubmitImage"
            method="post"
        >
            <div class="flex justify-center">
                <div class="mt-8">
                    <div class="mb-5">
                        Dont have username?
                        <NuxtLink
                            :to="url"
                            style="border-bottom: 1px solid grey;"
                        > Sign In to Imgur </NuxtLink>
                    </div>
                    <label for="image-title">USERNAME</label> <br>
                    <input
                        style="border: 1px solid grey; border-radius: 8px ; padding: 4px;"
                        class="bg-transparent"
                        autofocus
                        @focus="console.log($event.target.select())"
                        id="image=title"
                        name="image=title"
                        v-model="username"
                        type="text"
                    >
                    <div class="mt-3">
                        <label for="image-uploader">UPLOAD IMAGE</label> <br>
                        <input
                            accept="image/*"
                            type="file"
                            name="image-uploader"
                            id="image-uploader"
                            @change="onChangeImageUploader"
                        >
                    </div>

                    <div class="mt-3">
                        <button
                            class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                            style="border: 1px solid white;;"
                            type="submit"
                            :disabled="disableButton"
                        >
                            {{ disableButton ? 'Uploading..' : 'SUBMIT' }}
                        </button>
                    </div>
                    <img
                        :src="imageLink"
                        alt=""
                    >
                    <div class="mt-3">
                        <a
                            v-if="imageLink"
                            :href="imageLink"
                            target="_blank"
                        >VIEW IMAGE</a>
                    </div>
                    <div
                        class="mt-32"
                        @click="onClickCopy"
                        v-if="route.query.username"
                    >
                        <div class="text-2xl">READY TO CODE?</div>
                        <br>
                        <div>
                            MAKE AN HTTP POST REQUEST TO
                        </div>
                        <div>
                            {{ `${baseUrl}/api/images` }}
                        </div>

                        <br>
                        <div>
                            will the following multi part form data:
                        </div>
                        <div>
                            -username: {{ route.query?.username }} [string]
                        </div>
                        <div>
                            -image: ImageFile [Binary Large OBject (blob/binary)]
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <div class="absolute top-0 right-0 p-3">
            <ClientOnly>
                <select
                    class="bg-transparent outline-green-400 p-1 px-3"
                    style="border: 1px solid lightseagreen; border-radius: 8px;"
                    v-model="$colorMode.preference"
                >
                    <option value="system">System</option>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="sepia">Sepia</option>
                    <!-- <option value="tilte">Tilte</option> -->
                </select>
            </ClientOnly>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
const baseUrl = ref('')
const colorMode = useColorMode()
const url = 'https://api.imgur.com/oauth2/authorize?client_id=b5397916875dde8&response_type=token&state=NEW_REGISTRATION'
const imageFile = ref(null)
const username = ref('')
const token = ref(null);
const imageLink = ref(null);
const disableButton = ref(false);
onMounted(() => {

    baseUrl.value = window.location.origin;
    username.value = route.query.username;
    try {
        // $fetch('/api/images', {
        //     method: 'post',
        // })
    } catch (error) {
        console.error(error.message);
    }
})



function onClickCopy() {
    if (process.client) {
        navigator.clipboard.writeText(`${baseUrl.value}/api/images`)
    }
}
async function getTokens() {
    try {
        const res = await $fetch('/api/tokens')
        console.log(res)
        token.value = res[0].access_token
    } catch (error) {
        console.error(error.message);
    }
}

function onChangeImageUploader(data) {
    imageFile.value = data.target.files[0];

}

async function onSubmitImage() {
    try {
        disableButton.value = true;
        const fd = new FormData();
        fd.append('image', imageFile.value);
        // fd.append('title', username.value);
        // fd.append('description', '');
        fd.append('username', username.value)
        // fd.append('username', 'knurddev')
        const res = await $fetch(
            '/api/images'
            ,
            {
                method: 'post',
                body: fd,
                headers: {
                    'Authorization': `Bearer ${token.value}`,
                }
            },
        );

        imageLink.value = res.data.link

        disableButton.value = false;
    } catch (error) {
        disableButton.value = false;
        console.log('error resonse: ', error.response)
        console.log('errro data: ', error.data.message)
        alert(error.response?._data?.data?.message ?? error.message)
        // alert(error.response?.data?.message ?? error.message)
        // alert(error.data?.message ?? error.message)
        console.error(error);
    }
}

</script>

<style>
body {
    background-color: #fff;
    color: rgba(0, 0, 0, 0.8);
}

.dark-mode body {
    background-color: #091a28;
    color: #ebf4f1;
}

.sepia-mode body {
    background-color: #f1e7d0;
    color: #433422;
}

/* .tilte-mode body {
    background-color: lightslategray;
    color: lightcyan;
} */
</style>