import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { PromptRoutes, VideoRoutes, TranscriptionRoutes, GenerateAiRoutes } from './routes/'

const app = fastify()

app.register(fastifyCors, {
  origin: '*'
})

app.register(PromptRoutes)
app.register(VideoRoutes)
app.register(TranscriptionRoutes)
app.register(GenerateAiRoutes)

app.listen({
  port: 3000,
}).then(() => {
  console.log('HTTP server running!')
})
