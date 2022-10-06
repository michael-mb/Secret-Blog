<template>
  <section class="site-section py-sm">
    <div class="container">
      <div class="row mb-4">
        <div class="col-md-6">
          <h1>{{blok.title}}</h1>
        </div>
      </div>

      <form :action="blok.endpoint" method="post" :id="blok._uid" @submit="formSubmit">
      <div class="row blog-entries">
        <div class="col-md-12 col-lg-8 main-content">

          <div class="row" v-for="input in blok.inputs" :key="input._uid" v-editable="input">
            <div v-if="input.type === 'text'" class="col-md-12 form-group">
              <label :for="input.label">{{input.label}}</label>
              <input :id="input.name" :name="input.name" class="form-control" :type="input.text"
                     :placeholder="input.placeholder" :required="contains(input.validators, 'required')"
                     v-model="contactForm[input.name]">
            </div>

            <div v-if="input.type === 'number'" class="col-md-12 form-group" v-editable="input">
              <label :for="input.label">{{input.label}}</label>
              <input :id="input.name"  :name="input.name" class="form-control" type="number"
                     v-model="contactForm[input.name]" :placeholder="input.placeholder"
                     :required="contains(input.validators, 'required')">
              <div v-if="contains(input.validators, 'age')">
                <p v-if="!validAge(contactForm[input.name])" class="error">{{input.validators[0].errorMessage}}</p>
              </div>
            </div>

            <div v-if="input.type === 'email'" class="col-md-12 form-group" v-editable="input">
              <label :for="input.label">{{input.label}}</label>
              <input :id="input.name" :name="input.name" class="form-control" type="email" v-model="contactForm[input.name]" :placeholder="input.placeholder">
              <p v-if="!validEmail(contactForm.email)" class="error">{{input.validators[0].errorMessage}}</p>
            </div>

            <div v-if="input.type === 'description'" class="col-md-12 form-group" v-editable="input">
              <label :for="input.label">{{input.label}}</label>
              <textarea :id="input.name" :name="input.name" class="form-control" v-model="contactForm[input.name]">{{input.placeholder}}</textarea>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 form-group">
              <input type="submit" :value="blok.buttonText" :form="blok._uid" class="btn btn-primary">
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object });
const router = useRouter()

const contactForm = ref({})

props.blok.inputs.forEach( elem => {
  if(elem.default)
    contactForm.value[elem.name] = elem.default
  else
    contactForm.value[elem.name] = ""
})



function validEmail(email){
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  return email.match(validRegex) !== null
}

function validAge(age){
  return age >= 18
}

function contains(validators, validator){
  if(validators.length <= 0)
    return false

  return validators.some( elem => {
    return elem.component === validator
  })
}

function formSubmit(e){
  e.preventDefault()

  if(!validEmail(contactForm.value.email))
    return

  if(!validAge(contactForm.value.age))
    return

  $fetch(props.blok.endpoint, {
    method: 'POST',
    body: {
      name : contactForm.value.name,
      age : contactForm.value.age,
      email :contactForm.value.email,
      phone : contactForm.value.phone,
      description: contactForm.value.description
    }
  }).then((response) => {
    console.log(response)
    router.push("/")
  }).catch(e => { console.log(e)})
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
