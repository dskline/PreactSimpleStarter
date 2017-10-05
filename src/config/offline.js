import runtime from 'offline-plugin/runtime'

runtime.install({
  onUpdateReady () {
    runtime.applyUpdate()
  },

  // Reload to get the new version:
  onUpdated () {
    console.log('updated')
    // location.reload()
  }
})

export default runtime
