
import re

file_path = r'C:\Users\Diomedes Fernandez\.gemini\antigravity\scratch\UI Component Gallery\src\data\designerGuide.jsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find all component blocks
# We'll look for component: () => ( ... ) and component: () => { ... }
component_starts = list(re.finditer(r'component: \(\) => [({]', content))

errors = []

for i in range(len(component_starts)):
    start_pos = component_starts[i].start()
    if i + 1 < len(component_starts):
        end_pos = component_starts[i+1].start()
    else:
        end_pos = len(content)
    
    block = content[start_pos:end_pos]
    
    # Simple tag counting
    opens = block.count('<div')
    closes = block.count('</div>')
    
    if opens != closes:
        # Get line number
        line_num = content.count('\n', 0, start_pos) + 1
        errors.append({
            'line': line_num,
            'opens': opens,
            'closes': closes,
            'block': block[:200] + '...'
        })

print(f"Found {len(errors)} potential syntax errors in component blocks:")
for err in errors:
    print(f"Line {err['line']}: Opens={err['opens']}, Closes={err['closes']}")
    # print(err['block'])
