<script>
export default {
  props: ['do', 'active'],
  mounted () {
    if (this.active) this.addListener()
    else this.removeListener()
  },
  render () {
    return this.$slots.default[0]
  },
  methods: {
    addListener () {
      document.addEventListener('click', this.listener)
    },
    removeListener () {
      document.removeEventListener('click', this.listener)
    },
    listener (e) {
      if (
        this.active &&
        e.target !== this.$el &&
        !this.$el.contains(e.target)
      ) {
        this.do()
      }
    }
  },
  beforeDestroy () {
    this.removeListener()
  },
  watch: {
    active (val) {
      if (val) {
        this.addListener()
      } else {
        this.removeListener()
      }
    }
  }
}
</script>
