<template>
  <div class="element-form">
    <el-form ref="form" :model="form" status-icon :rules="rules" label-width="150px" label-position="top">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="form['name']"></el-input>
      </el-form-item>
      <el-form-item label="活动地点" prop="region">
        <el-select v-model="form['region']" placeholder="请选择活动区域">
          <el-option label="上海" value="shanghai"></el-option>
          <el-option label="北京" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间" required>
        <el-row>
          <el-col :span="11">
            <el-form-item prop="date">
              <el-date-picker type="date" v-model="form.date" placeholder="请选择日期"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="time">
              <el-time-picker v-model="form.time" placeholder="请选择时间"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="即时配送" prop="delivery" required>
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质" prop="type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="form.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.userpassword"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="form.checkPass"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model.number="form.userage"></el-input>
      </el-form-item>
      <el-form-item :label="`域名${index}`" v-for="(domain, index) in form.domains" :key="index" :rules="[{ required: true, message: '请输入值', trigger: 'blur' }]">
        <el-input v-model="domain.value"></el-input>
        <el-button @click="removeDomain(domain)">删除</el-button>
      </el-form-item>
      <el-form-item>
        <el-button @click="addDomain">新增域名</el-button>
        <el-button type="primary" @click="submitForm('form')">提交</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
    {{ form.name }}
    {{ form.region }}
    {{ form.date }}
    {{ form.time }}
    {{ form.delivery }}
    {{ form.type }}
    {{ form.resource }}
    {{ form.desc }}
    {{ form.userpassword }}
  </div>
</template>

<script>
export default {
  name: 'ElementForm',
  data() {
    return {
      form: {
        name: null,
        region: null,
        date: null,
        time: null,
        delivery: null,
        type: [],
        resource: null,
        desc: null,
        userpassword: '',
        checkPass: '',
        userage: null,
        domains: [
          {
            value: '123123',
          },
          {
            value: '456456',
          },
        ],
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在3到5个字符', trigger: 'blur' },
        ],
        region: [{ required: true, message: '请输入活动地区', trigger: 'change' }],
        date: [{ type: 'date', required: true, message: '请输入活动日期', trigger: 'change' }],
        time: [{ type: 'date', required: true, message: '请输入活动时间', trigger: 'change' }],
        type: [{ type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }],
        resource: [{ required: true, message: '请输入活动资源', trigger: 'change' }],
        desc: [{ required: true, message: '请输入活动形式', trigger: 'blur' }],
        password: [{ validator: this.validatePass, trigger: 'blur' }],
        checkPass: [{ validator: this.validatePass2, trigger: 'blur' }],
        age: [{ validator: this.checkAge, trigger: 'blur' }],
      },
    };
  },
  methods: {
    // 提交
    submitForm(formName) {
      // valid:ture / false
      // 满足所有的校验规则为true，有一项不满足就为false。
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(valid);
          alert('submit success');
        } else {
          console.log(valid);
          console.log('error');
          return false;
        }
      });
    },
    // 重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 自定义验证：密码
    validatePass(rule, value, callback) {
      if (value === '') {
        console.log('没有输入密码');
        callback(new Error('请输入密码'));
      } else {
        if (this.form.checkPass !== '') {
          this.$refs.form.validateField('checkPass');
        }
        callback();
      }
    },
    // 自定义验证：重复密码
    validatePass2(rule, value, callback) {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else if (value !== this.form.password) {
        callback(new Error('两次密码输入不一致'));
      } else {
        callback();
      }
    },
    // 自定义验证：年龄
    checkAge(rule, value, callback) {
      if (!value) {
        callback(new Error('年龄不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else if (value < 18) {
          callback(new Error('年龄必须大于18'));
        } else {
          callback();
        }
      }, 1000);
    },
    removeDomain(domain) {
      let index = this.form.domains.indexOf(domain);
      console.log(index);
      this.form.domains.splice(index, 1);
    },
    addDomain() {
      this.form.domains.push({
        value: null,
        key: Date.now(),
      });
    },
  },
};
</script>

<style lang="scss" module></style>
