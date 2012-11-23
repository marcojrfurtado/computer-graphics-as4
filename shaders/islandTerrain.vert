//A brutally simple vertex shader that just mimics exactly what OpenGL's default
//fixed pipeline does

varying vec2 texCoord;

void main() {                

    vec2 texCoord = gl_MultiTexCoord0.xy;

    gl_TexCoord[0] = gl_MultiTexCoord0 ;

    
    gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex ;
}
