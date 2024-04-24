<template>
    <div>
        <ClientOnly>
            <select
                class="bg-zinc-800 text-white"
                v-model="$colorMode.preference"
            >
                <option value="system">System</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="sepia">Sepia</option>
                <option value="tilte">Tilte</option>
            </select>
        </ClientOnly>
        <a :href="url">
            <button
                class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="submit"
            >Sign In to Imgur</button>

        </a>

        <div class="flex justify-center text-3xl">
            USERNAME: {{ tokenData.account_username }}
        </div>
    </div>
</template>

<script setup>

const url = 'https://api.imgur.com/oauth2/authorize?client_id=b5397916875dde8&response_type=token&state=NEW_REGISTRATION'
const tokenData = ref({
    access_token: '',
    expires_in: '',
    token_type: '',
    refresh_token: '',
    account_username: '',
    account_id: '',
})
onMounted(() => {
    const token = extractAccessToken(window.location.href)
})

function extractAccessToken(url) {
    const params = new URLSearchParams(url.split('#')[1]);
    const accessToken = params.get('access_token');
    const refreshToken = params.get('refresh_token')

    tokenData.value.access_token = params.get('access_token')
    tokenData.value.expires_in = params.get('expires_in')
    tokenData.value.token_type = params.get('token_type')
    tokenData.value.refresh_token = params.get('refresh_token')
    tokenData.value.account_username = params.get('account_username')
    tokenData.value.account_id = params.get('account_id')

    if (accessToken) {
        $fetch('/api/tokens', {
            method: 'post',
            body: tokenData.value
        })
        alert('user has been registered!')
    }
    return accessToken;
}

async function getCategores() {
    try {
        // 
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