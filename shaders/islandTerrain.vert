//A brutally simple vertex shader that just mimics exactly what OpenGL's default
//fixed pipeline does

varying vec4 texCoord;

void main() {                

    vec4 texCoord = gl_MultiTexCoord0;

    gl_TexCoord[0] = texCoord ;

    
    gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex ;
}
