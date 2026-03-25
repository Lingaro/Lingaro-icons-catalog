# Lingaro Icons Catalog - Documentation

Comprehensive documentation for the Lingaro Icons Catalog system architecture, integrations, and user workflows.

## Documentation Overview

### 📐 [Architecture](architecture.md)
Complete system architecture including:
- High-level component diagram
- API layer and routers
- Business logic components
- Data storage schema
- External service integrations
- Deployment architecture
- Technology stack

**Key Diagrams**:
- Overall system architecture with all components
- Icon upload flow sequence
- Semantic search flow
- MCP tool call flow
- Development vs Production deployment

### 🔌 [MCP Integration](mcp-integration.md)
Model Context Protocol server integration for AI assistants:
- MCP server architecture
- Available tools and schemas
- Communication protocols
- Configuration and setup
- Use cases and workflows
- Error handling and troubleshooting

**Key Diagrams**:
- MCP integration overview
- MCP server architecture
- Communication sequence flows
- Tool execution workflows

### 💻 [CLI Usage](cli-usage.md)
Command-line interface guide:
- CLI architecture and components
- Complete command reference
- Installation and configuration
- Usage workflows and examples
- Advanced scripting patterns
- CI/CD integration examples

**Key Diagrams**:
- CLI architecture
- Command structure hierarchy
- Search and download workflows
- Batch operation flows

### 👥 [User Journey](user-journey.md)
User experience maps across all interfaces:
- User personas and use cases
- Journey maps for each persona
- Detailed workflow diagrams
- Cross-journey patterns
- Success metrics and funnels

**Key Diagrams**:
- User persona mindmap
- Journey maps for 5 user types
- Detailed flow diagrams
- Conversion funnels
- Feedback loop

## Quick Navigation

### By User Type

**Marketing/Design Team**
- [User Journey - Marketing Team](user-journey.md#journey-1-marketing-team-member-creating-presentation)
- Web UI best practices

**Developers**
- [CLI Usage Guide](cli-usage.md)
- [NPM Package Integration](architecture.md#npm-client)
- [API Documentation](architecture.md#api-layer)

**AI Assistants (Claude Code)**
- [MCP Integration Guide](mcp-integration.md)
- [Available MCP Tools](mcp-integration.md#available-mcp-tools)

**DevOps Engineers**
- [CLI Automation](cli-usage.md#advanced-usage)
- [CI/CD Examples](user-journey.md#journey-5-devops-engineer-automating-icon-updates)

**Office Users (PowerPoint)**
- [PowerPoint Add-in](architecture.md#powerpoint-add-in)
- [Business Analyst Journey](user-journey.md#journey-4-business-analyst-using-powerpoint-add-in)

### By Task

**Understanding the System**
1. Start with [Architecture Overview](architecture.md#high-level-architecture)
2. Review [Component Details](architecture.md#component-details)
3. Explore [Data Flow Examples](architecture.md#data-flow-examples)

**Setting Up MCP Integration**
1. Read [MCP Overview](mcp-integration.md#overview)
2. Follow [Configuration Guide](mcp-integration.md#configuration)
3. Review [Available Tools](mcp-integration.md#available-mcp-tools)
4. Check [Troubleshooting](mcp-integration.md#troubleshooting)

**Using the CLI**
1. [Install CLI](cli-usage.md#installation)
2. Review [Command Reference](cli-usage.md#command-reference)
3. Follow [Usage Workflows](cli-usage.md#usage-workflows)
4. Explore [Advanced Examples](cli-usage.md#advanced-usage)

**Building an Integration**
1. Review [Architecture](architecture.md)
2. Choose your interface (API, CLI, MCP, NPM)
3. Follow relevant integration guide
4. Check [User Journey](user-journey.md) for UX patterns

## System Components

### Client Interfaces
- **Web UI**: HTML/CSS/JS catalog browser
- **CLI Tool**: Python-based command-line interface
- **MCP Server**: AI assistant integration
- **NPM Package**: TypeScript client library
- **PowerPoint Add-in**: Office.js integration

### Backend
- **FastAPI**: REST API server
- **SQLite**: Icon metadata database
- **Search Engine**: Text (FTS5) + Semantic (OpenAI)
- **AI Annotator**: GPT-4 Vision for metadata

### External Services
- **OpenAI API**: Embeddings and vision
- **Azure Web App**: Production hosting

## Development Workflows

### Local Development
```bash
# 1. Start the API server
python app.py

# 2. Access web UI
open http://localhost:8000

# 3. Test CLI
cli-anything-lingaro-catalog search "azure"

# 4. Test MCP (via Claude Code)
# Configure .mcp.json to point to local server
```

### Adding New Icons
```bash
# 1. Add SVG files to icons/ directory
# 2. Scan for new icons
python scripts/scan_icons.py

# 3. Generate AI annotations (optional)
python scripts/annotate.py

# 4. Test in UI
open http://localhost:8000
```

### Deploying Changes
```bash
# 1. Run tests
pytest

# 2. Build NPM packages
cd packages/icons-client && pnpm build

# 3. Deploy to Azure
./deploy.sh
```

## Architecture Principles

### Modularity
- **Separation of Concerns**: Clear boundaries between UI, API, and data layers
- **Plugin Architecture**: MCP, CLI, and NPM packages as independent modules
- **Router Pattern**: API endpoints organized by domain (icons, search, collections)

### Scalability
- **Stateless API**: Horizontal scaling of API servers
- **Async Operations**: Background tasks for AI annotation
- **Caching Strategy**: Browser caching, API response optimization

### Extensibility
- **Multiple Interfaces**: Add new clients without changing backend
- **Open API**: RESTful design with OpenAPI docs
- **MCP Protocol**: Standard interface for AI integrations

### Performance
- **FTS5 Search**: Fast full-text search for keywords
- **Semantic Cache**: Embeddings pre-computed and stored
- **CDN-Ready**: Static assets optimized for delivery

## Data Flow Patterns

### Search Flow
```
User → Interface → API → Search Engine → Database → Results
                   ↓
                OpenAI (semantic only)
```

### Upload Flow
```
User → Interface → API → File Storage → Database
                   ↓
              Background Task → AI Annotator → OpenAI
```

### Download Flow
```
User → Interface → API → File Storage → User
```

## Security Considerations

- **API Keys**: Optional authentication for write operations
- **CORS**: Configured for web client access
- **Input Validation**: Pydantic models for all requests
- **File Type Validation**: SVG only for uploads
- **SQL Injection**: Protected via parameterized queries

## Performance Characteristics

| Operation | Performance | Scalability |
|-----------|-------------|-------------|
| Text Search | ~10ms | High (indexed) |
| Semantic Search | ~200ms | Medium (OpenAI API) |
| Icon Download | ~50ms | High (static files) |
| Icon Upload | ~1s | Medium (AI annotation) |
| API Response | <100ms | High (async) |

## Technology Stack Summary

| Layer | Technologies |
|-------|-------------|
| **Frontend** | HTML, CSS, JavaScript, React (NPM), Office.js |
| **API** | FastAPI, Pydantic, Uvicorn |
| **Database** | SQLite, FTS5 |
| **Search** | OpenAI Embeddings, Cosine Similarity |
| **AI** | GPT-4 Vision, text-embedding-ada-002 |
| **CLI** | Python Click, httpx, Rich |
| **MCP** | Python MCP SDK |
| **Build** | TypeScript, tsup, pnpm |
| **Deploy** | Azure Web App, Gunicorn |

## Related Resources

### Internal
- [Main README](../README.md)
- [Quick Start Guide](../QUICK-START.md)
- [Deployment Guide](DEPLOYMENT.md)
- [CLAUDE.md](../CLAUDE.md) - AI assistant guidance

### External
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [MCP Protocol Specification](https://modelcontextprotocol.io/)
- [OpenAI API Reference](https://platform.openai.com/docs/)
- [Office Add-ins Documentation](https://learn.microsoft.com/en-us/office/dev/add-ins/)

## Contributing

When contributing to documentation:
1. Follow Mermaid diagram conventions
2. Keep diagrams simple and focused
3. Include both high-level and detailed views
4. Add code examples where helpful
5. Update index when adding new docs

## Feedback

For questions or suggestions about this documentation:
- Create an issue in the GitHub repository
- Contact the Lingaro design/engineering team
- Refer to [CLAUDE.md](../CLAUDE.md) for AI-assisted improvements

---

**Last Updated**: 2026-03-25
**Documentation Version**: 1.0
**System Version**: 0.1.0
