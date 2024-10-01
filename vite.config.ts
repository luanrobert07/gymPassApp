import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environmentMatchGlobs: [['src/http/controllers/**', 'prisma']],
    reporters: ['default', 'junit'],  // Adiciona reporter JUnit
    outputFile: 'test-results.html',   // Especifica o arquivo de saída do relatório
    coverage: {
      reporter: ['text', 'json', 'html'],  // Gera relatórios de cobertura em vários formatos
    },
  },
});
