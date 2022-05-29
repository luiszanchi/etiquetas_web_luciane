<template>
    <div>
        <b-form-group
            label="Arquivo"
            class="upload-form"
        >
            <b-button class="button" @click="$refs['upload-form'].click()">
                {{ textToShowButton }}
            </b-button>
            <b-form-input
                v-model="text"
                type="text"
                required
                min="0"
                max="10"
                class="texto"
            />
        </b-form-group>
        <input type="file" id="upload-form" ref="upload-form" @change="changeImage">
    </div>
</template>

<script>
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
export default {
    name: 'UploadForm',
    data() {
        return {
            text: '',
            val: null
        }
    },
    methods: {
        async changeImage (value) {
            this.val = null;
            this.text = '';

            if (value.target.files.length) {
                this.text = value.target.value;
                this.val = await getBase64(value.target.files[0]);
            }

            this.$emit('input', this.val)

        }
    },
    computed: {
        textToShowButton() {
            return this.val ? 'Trocar' : 'Buscar'
        }
    }
}
</script>

<style scoped>
#upload-form {
    display: none;
}
.texto {
    width: calc(100% - 77px);
}
.upload-form {
    display: block;
}
.button {
    float: right;
}
</style>