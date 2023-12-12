package Dokumentoobor8.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Dokumentoobor8.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: ВходВСистему
 */
@Entity(name = "IISDokumentoobor8ВходВСистему")
@Table(schema = "public", name = "ВходВСистему")
public class VxodVSistemu {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаВхода")
    private Date датавхода;

    @OneToMany(mappedBy = "vxodvsistemu", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<TCHPolzovatel> tchpolzovatels;


    public VxodVSistemu() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаВхода() {
      return датавхода;
    }

    public void setДатаВхода(Date датавхода) {
      this.датавхода = датавхода;
    }


}