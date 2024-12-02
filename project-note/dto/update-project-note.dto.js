"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProjectNoteDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_project_note_dto_1 = require("./create-project-note.dto");
class UpdateProjectNoteDto extends (0, mapped_types_1.PartialType)(create_project_note_dto_1.CreateProjectNoteDto) {
}
exports.UpdateProjectNoteDto = UpdateProjectNoteDto;
//# sourceMappingURL=update-project-note.dto.js.map