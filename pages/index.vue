<template>
    <div>
        <form
            @submit.prevent="onSubmitImage"
            method="post"
        >
            <div class="flex justify-center">
                <div class="mt-8">
                    <label for="image-title">USERNAME</label> <br>
                    <input
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
                            type="submit"
                        >SUBMIT</button>
                    </div>
                    <img
                        :src="imageLink"
                        alt=""
                    >
                    <div class="mt-3">
                        <a
                            :href="imageLink"
                            target="_blank"
                        >VIEW IMAGE</a>
                    </div>

                </div>
            </div>
        </form>
        <div class="absolute top-0 right-0">
            <ClientOnly>
                <select v-model="$colorMode.preference">
                    <option value="system">System</option>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="sepia">Sepia</option>
                    <option value="tilte">Tilte</option>
                </select>
            </ClientOnly>
        </div>
    </div>
</template>

<script setup>
const colorMode = useColorMode()

const imageFile = ref(null)
const username = ref('')
const token = ref(null);
const imageLink = ref(null);
onMounted(() => {
    const route = useRoute()
    username.value = route.query.username;
    try {
        // $fetch('/api/images', {
        //     method: 'post',
        // })
    } catch (error) {
        console.error(error.message);
    }
})

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

    } catch (error) {
        console.error(error.message);
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

.tilte-mode body {
    background-color: lightslategray;
    color: lightcyan;
}
</style>